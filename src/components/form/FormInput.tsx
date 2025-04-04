import { ErrorMessage } from "@hookform/error-message";
import { FormControl, FormLabel, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  defaultValue,
  rules,
  control,
  errors,
  additionalType,
  disabled,
  onChange: handleChange,
}) => {
  const theme = useTheme();

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
          <Box>
            <TextField
              name={name}
              value={value}
              onChange={(e) => {
                onChange(e);
                if (handleChange) {
                  handleChange(e);
                }
              }}
              disabled={disabled ? disabled : false}
              type={additionalType}
              placeholder={placeholder}
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "0.875rem",
                  padding: "0.5rem 0.625rem",
                  color: theme.palette.secondary.main,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: "0.5rem !important",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem !important",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: `1px solid ${theme.palette.bordercolor.main} !important`,
                },
                "&:focus.MuiOutlinedInput-notchedOutline": {
                  border: `1px solid ${theme.palette.primary.main}`,
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: `2px solid ${theme.palette.primary.main} !important`,
                },
              }}
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
                      display: "flex",
                      justifyContent: "left",
                    }}
                  >
                    {message}
                  </Box>
                )}
              />
            )}
          </Box>
        </FormControl>
      )}
    />
  );
};

export default FormInput;
