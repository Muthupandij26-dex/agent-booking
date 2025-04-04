import { Dayjs } from "dayjs";
import { ChangeEvent } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";
import { CSSProperties } from "styled-components";

export type FormBuilderProps = {
  control?: Control;
  formFields: () => FormField[];
  errors: FieldErrors<FieldValues>;
  gridContainer?: CSSProperties;
  gridChild?: CSSProperties;
  gridColumns?: number;
  isProforma?: boolean;
  style?: CSSProperties;
};

export interface optionsList {
  value: string | number;
  label: string | number;
}

export type FormField = {
  name: string;
  label: string;
  type:
    | "textfield"
    | "dropdown"
    | "textarea"
    | "multiSelect"
    | "selectBox"
    | "select"
    | "attachment";
  rules: {
    required: string;
    maxLength?: number;
    minLength?: number;
  };
  defaultValue?: string | number | boolean | Array<optionsList> | Dayjs;
  hide?: boolean;
  additionalType?: string;
  placeholder?: string;
  options?: { label: string | number; value: string | number }[] | undefined;
  gridColumns?: number;
  disabled?: boolean;
  onChange?:
    | ((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
    | undefined;
  handleInputChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue: string,
  ) => void;
  s3FolderName?: string;
  setValue?: UseFormSetValue<FieldValues>;
};

export type FormFactoryProps = {
  control?: Control;
  defaultValue?: string | number | boolean | Array<optionsList> | Dayjs;
  errors?: FieldErrors<FieldValues> | undefined;
  hide?: boolean;
  label: string;
  name: string;
  onChange?:
    | ((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
    | undefined;
  options?: { label: string | number; value: string | number }[] | undefined;
  placeholder?: string;
  rules?: {
    required: string;
    maxLength?: number;
    minLength?: number;
  };
  style?: CSSProperties;
  type?: string;
};
