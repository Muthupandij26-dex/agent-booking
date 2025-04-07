import { ErrorMessage } from "@hookform/error-message";
import { Box, FormControl, FormLabel, useTheme } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { JSX } from "react";
import DropZone from "../dropzone/Dropzone";

const FormAttachment = ({
  name,
  control,
  rules,
  label,
  errors,
  defaultValue,
  s3FolderName,
  setValue,
  disabled,
  height,
}: FormInputProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={() => (
        <>
          <FormControl fullWidth>
            <FormLabel
              sx={(theme) => ({
                justifyContent: "left",
                gap: "0.5rem",
                marginBottom: "0.3125rem",
                fontSize: theme.typography.subtitle2.fontSize,
                color: "#00000099",
              })}
            >
              {label}
              {rules?.required && (
                <span
                  style={{
                    color: theme.palette.error.main,
                    paddingLeft: "0.1875rem",
                    fontSize: theme.typography.subtitle2.fontSize,
                  }}
                >
                  {" "}
                  *
                </span>
              )}
            </FormLabel>
            <DropZone
              setValue={setValue}
              s3FolderName={s3FolderName}
              formField={name}
              defaultValue={defaultValue}
              disabled={disabled}
              errors={errors}
              control={control}
              rules={rules ?? {}}
              height={height}
            />
          </FormControl>
          {errors && (
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <Box
                  sx={{
                    fontSize: theme.typography.subtitle2.fontSize,
                    color: theme.palette.error.main,
                  }}
                >
                  {message}
                </Box>
              )}
            />
          )}
        </>
      )}
    />
  );
};

export default FormAttachment;
