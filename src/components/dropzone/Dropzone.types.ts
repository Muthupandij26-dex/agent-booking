import { Dayjs } from "dayjs";
import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { optionsList } from "../form/FormBuilder.types";

export type DropZoneProps = {
  s3FolderName?: string;
  formField: string;
  setValue?: (name: string, value: string) => void;
  defaultValue?: string | number | boolean | Array<optionsList> | Dayjs;
  disabled?: boolean;
  control?: Control;
  errors: FieldErrors<FieldValues> | undefined;
  rules: object;
  height?: string;
};
