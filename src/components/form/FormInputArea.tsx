import { ErrorMessage } from "@hookform/error-message";
import {
  Box,
  FormControl,
  FormLabel,
  TextareaAutosize,
  useTheme,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { CSSProperties, JSX } from "react";
import { FormInputProps } from "./FormInputProps";

const FormInputArea = ({
  name,
  control,
  rules,
  label,
  errors,
  defaultValue,
  placeholder,
  style,
  disabled,
}: FormInputProps): JSX.Element => {
  const theme = useTheme();

  const combinedStyles: CSSProperties | object = {
    ...style,
    border: `1px solid #D5D6D6`,
    borderRadius: "0.5rem",
    padding: "0.5rem",
    fontSize: "0.875rem",
    resize: "none",
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    outlineColor: theme.palette.primary.main,
    "& .MuiOutlinedInput-input": {
      color: theme.palette.secondary.main,
    },
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <FormLabel
            sx={{
              color: (theme) => theme.palette.secondary.main,
              display: "flex",
              justifyContent: "left",
              gap: "0.5rem",
              fontFamily: "Medium",
              marginBottom: "0.3125rem",
            }}
          >
            {label}
            {rules?.required && (
              <span
                style={{
                  color: theme.palette.error.main,
                  paddingLeft: "0.1875rem",
                }}
              >
                {" "}
                *
              </span>
            )}
          </FormLabel>
          <TextareaAutosize
            name={name}
            value={value}
            onChange={onChange}
            style={combinedStyles}
            minRows={3}
            placeholder={placeholder}
            disabled={disabled || false}
          />
          {errors && (
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <Box
                  sx={{
                    fontFamily: "Regular",
                    color: theme.palette.error.main,
                  }}
                >
                  {message}
                </Box>
              )}
            />
          )}
        </FormControl>
      )}
    />
  );
};

export default FormInputArea;
