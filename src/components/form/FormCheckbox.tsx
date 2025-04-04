import { ErrorMessage } from "@hookform/error-message";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { JSX } from "react";
import { FormInputProps } from "./FormInputProps";
import { Controller } from "react-hook-form";

const FormCheckBox = ({
  name,
  control,
  rules,
  label,
  errors,
  defaultValue,
  disabled,
}: FormInputProps): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <>
          <FormControlLabel
            label={label}
            sx={{
              fontSize: "0.875rem",
            }}
            disabled={disabled || false}
            control={
              <Checkbox disableRipple {...field} checked={field.value} />
            }
          />
          {errors && (
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <Box sx={{ fontSize: "0.875rem", color: "red" }}>{message}</Box>
              )}
            />
          )}
        </>
      )}
    />
  );
};

export default FormCheckBox;
