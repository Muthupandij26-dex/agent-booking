/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Box, Link, styled, Typography, useTheme } from "@mui/material";
import React, { FC, useEffect } from "react";
import {
  handleDownload,
  handleFileUpload,
  S3DownloadResponse,
} from "../../utils/filedownloadOld";
import { DropZoneProps } from "./Dropzone.types";
import { UploadIcon } from "../../assets";

const DropZoneContainer = styled(Box)(({ theme }) => ({
  width: "100% !important",
  background: theme?.palette?.primary?.light,
  borderRadius: "0.625rem",
  textAlign: "center",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  height: "376px", //hotel image height
}));

type FileInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const FileInput = ({ className, ...props }: FileInputProps) => (
  <input className={className} {...props} />
);

const StyledFileInput = styled(FileInput)`
  display: none;
`;

const DropZone: FC<DropZoneProps> = ({
  s3FolderName,
  formField,
  setValue,
  defaultValue,
  height,
}) => {
  const theme = useTheme();
  const [fileName, setFileName] = React.useState<string>("");
  const [s3Url, setS3Url] = React.useState<string>("");
  const [imageView, setImageview] = React.useState<string>("");
  const [isImage, setIsImage] = React.useState<boolean>(false);

  useEffect(() => {
    if (typeof defaultValue === "string" && defaultValue) {
      const fileExtension = defaultValue.split(".").pop()?.toLowerCase();
      const imageExtensions = ["jpg", "jpeg", "png", "gif", "svg"];

      if (fileExtension && imageExtensions.includes(fileExtension)) {
        setIsImage(true);
        if (defaultValue.startsWith("/")) {
          handleDownload(defaultValue).then((res: S3DownloadResponse) => {
            setImageview(res.data);
          });
          setS3Url(defaultValue);
        } else {
          const resolvedUrl = new URL(
            `../../assets/hotels/${defaultValue}`, // just to show the defaultimage when no image is there
            import.meta.url,
          ).href;
          setImageview(resolvedUrl);

          //To upload the local folder image into S3 when default value is provided
          fetch(resolvedUrl)
            .then((response) => response.blob())
            .then((blob) => {
              const file = new File([blob], defaultValue, { type: blob.type });
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(file);

              s3FolderName &&
                handleFileUpload(
                  {
                    target: {
                      files: dataTransfer.files, // Pass the FileList instead of File[]
                    },
                  } as React.ChangeEvent<HTMLInputElement>,
                  s3FolderName,
                )
                  .then(
                    (
                      response:
                        | { s3Url: string; fileName: string }
                        | null
                        | undefined,
                    ) => {
                      if (response) {
                        setFileName(response.fileName);
                        setValue && setValue(formField, response.s3Url);
                        setS3Url(response.s3Url);
                      }
                    },
                  )
                  .catch((err: unknown) => {
                    console.log("err", err);
                  });
            });
        }
      } else {
        setIsImage(false);
        setFileName(defaultValue);
        setS3Url(defaultValue);
      }
    }
  }, [defaultValue]);

  const handleViewFile = () => {
    handleDownload(s3Url).then((res: S3DownloadResponse) => {
      window.open(res.data, "_blank");
    });
  };

  return (
    <>
      <label>
        {
          <DropZoneContainer
            style={{
              background: defaultValue
                ? "transparent"
                : theme?.palette?.primary?.light,
              height: height ? height : "250px",
            }}
          >
            {fileName === "" && !defaultValue && (
              <Box
                sx={{
                  color: theme.palette.secondary.main,
                  alignSelf: "center",
                  justifyContent: "center",
                  justifySelf: "center",
                  size: "0.625rem",
                  width: "100%",
                  py: "1.25rem",
                }}
              >
                <UploadIcon />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    pt: "0.625rem",
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    Drag & drop files or
                    <Typography
                      component={"span"}
                      variant="h6"
                      fontWeight={600}
                      style={{ color: theme.palette.primary.main }}
                    >
                      {" "}
                      Browse
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            )}

            <StyledFileInput
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target?.files?.[0];
                if (file) {
                  const fileExtension = file.name
                    .split(".")
                    .pop()
                    ?.toLowerCase();
                  const imageExtensions = ["jpg", "jpeg", "png", "gif"];
                  if (imageExtensions.includes(fileExtension!)) {
                    setIsImage(true);
                    setImageview(URL.createObjectURL(file));
                  } else {
                    setIsImage(false);
                    setFileName(file.name);
                  }
                  setImageview(URL.createObjectURL(file));
                }
                s3FolderName &&
                  handleFileUpload(e, s3FolderName)
                    .then(
                      (
                        response:
                          | { s3Url: string; fileName: string }
                          | null
                          | undefined,
                      ) => {
                        if (response) {
                          setFileName(response.fileName);
                          setValue && setValue(formField, response.s3Url);
                          setS3Url(response.s3Url);
                        }
                      },
                    )
                    .catch((err: unknown) => {
                      console.log("err", err);
                    });
              }}
              id={`file-input}`}
              type="file"
              accept="*"
            />

            {/*  After Upload display image inside dropzone if image if it's pdf something download*/}
            {(fileName !== "" || defaultValue) && (
              <Box
                style={{ width: "100%", height: "100%", position: "relative" }}
                bgcolor={"white"}
              >
                {isImage ? (
                  <>
                    <img
                      src={imageView}
                      width={"100%"}
                      height={"100%"}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box>
                      <Typography variant="h6">
                        {fileName.split("/").pop()}
                      </Typography>
                    </Box>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleViewFile}
                      color="primary"
                      sx={{ textDecorationColor: "primary" }}
                    >
                      View
                    </Link>
                  </Box>
                )}
              </Box>
            )}
          </DropZoneContainer>
        }
      </label>
    </>
  );
};

export default DropZone;
