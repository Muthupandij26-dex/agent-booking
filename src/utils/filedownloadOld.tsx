import { v4 as uuidv4 } from "uuid";
import { post } from "../api/apiservice";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const generateUniqueId = () => {
  return uuidv4();
};
export type S3UploadResponse = {
  fileName: string;
  s3Url: string;
};

export type S3DownloadResponse = {
  data: string;
};

export type DownloadResponse = {
  data: string;
};

export const handleFileUpload = async (
  event: React.ChangeEvent<HTMLInputElement>,
  s3Folder: string,
) => {
  if (!event.target.files || event.target.files.length === 0) return;

  const file = event.target.files[0];
  const fileName = file.name;
  const keyName = `${s3Folder}/${generateUniqueId()}/${fileName}`;

  const client = new S3Client({
    region: import.meta.env.VITE_REGION,
    credentials: {
      accessKeyId: import.meta.env.VITE_ACCESS_KEY_S3,
      secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
    },
  });

  try {
    const putParams = {
      Bucket: import.meta.env.VITE_REACT_APP_AWS_BUCKET,
      Key: keyName,
      Body: await file.arrayBuffer(),
      ContentType: file.type,
    };

    await client.send(new PutObjectCommand(putParams));

    return { s3Url: keyName, fileName };
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};

export const handleDownload = async (key: string) => {
  const response = await post({
    url: `/s3/download`,
    data: { key: key },
    customHeaders: "application/json",
  });

  return response as S3DownloadResponse;
};
