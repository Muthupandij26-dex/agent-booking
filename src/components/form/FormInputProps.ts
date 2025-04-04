import { Dayjs } from "dayjs";
import { CSSProperties } from "react";
import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { optionsList } from "./FormBuilder.types";
import { InputActionMeta } from "react-select";
export interface FormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string | number | boolean | Array<optionsList> | Dayjs;
  height?: string;

  rules?: {
    required: string;
    maxLength?: number;
    minLength?: number;
  };
  control?: Control;
  errors: FieldErrors<FieldValues> | undefined;
  style?: CSSProperties;
  condition?: boolean;
  additionalType?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  disabled?: boolean;
  options?: { label: string | number; value: string | number }[] | undefined;
  s3FolderName?: string;
  setValue?: (name: string, value: string) => void;
  handleInputChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue: string,
  ) => void;
  handleSelectInputChange?: (
    inputValue: string,
    actionMeta: InputActionMeta,
  ) => void;
  disableOptions?:
    | string
    | number
    | Date
    | Dayjs
    | null
    | Array<optionsList>
    | undefined;
}
