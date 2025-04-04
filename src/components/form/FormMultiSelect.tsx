import { ErrorMessage } from "@hookform/error-message";
import { FormControl, FormLabel, useTheme } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { FormInputProps } from "./FormInputProps";

const FormMultiSelectInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  defaultValue,
  rules,
  control,
  errors,
  options,
  disabled,
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
              display: "flex",
              justifyContent: "left",
              fontFamily: "Medium",
              color: theme.palette.secondary.main,
              marginBottom: "0.3125rem",
              "&.Mui-focused": {
                color: theme.palette.secondary.main,
              },
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
          <Select
            isMulti
            value={value}
            onChange={onChange}
            options={options}
            isDisabled={disabled}
            placeholder={placeholder}
            theme={(myTheme) => ({
              ...myTheme,
              colors: {
                ...myTheme.colors,
                primary: theme.palette.primary.main,
              },
            })}
            styles={{
              control: (base, state) => ({
                ...base,
                borderRadius: "0.5rem",
                minHeight: "36px",
                borderColor: state.isFocused
                  ? theme.palette.primary.main
                  : theme.palette.bordercolor.main,
                ":hover": {
                  borderColor: state.isFocused
                    ? theme.palette.primary.main
                    : theme.palette.bordercolor.main,
                },
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: theme.palette.background.paper,
              }),
              option: (base, state) => ({
                ...base,
                fontWeight: state.isFocused ? 700 : 600,
                fontSize: "0.875rem",
                color: state.isFocused
                  ? theme.palette.primary.main
                  : theme.palette.black.main,
                backgroundColor: state.isFocused
                  ? theme.palette.highlightcolor.main
                  : base.backgroundColor,
                ":hover": {
                  backgroundColor: state.isSelected
                    ? theme.palette.highlightcolor.main
                    : theme.palette.highlightcolor.main,
                },
              }),
              multiValue: (base) => ({
                ...base,
                backgroundColor: theme.palette.primary.light,
                borderRadius: "0.25rem",
                padding: "0.125rem 0.25rem",
                color: theme.palette.secondary.main,
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: theme.palette.secondary.main,
                fontSize: "0.75rem",
              }),
              multiValueRemove: (base) => ({
                ...base,
                color: theme.palette.secondary.main,
                ":hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.white.main,
                },
              }),
              input: (base) => ({
                ...base,
              }),
              indicatorSeparator: (provided) => ({
                ...provided,
                display: "none",
              }),
            }}
          />
          {errors && (
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <div style={{ color: theme.palette.error.main }}>{message}</div>
              )}
            />
          )}
        </FormControl>
      )}
    />
  );
};

export default FormMultiSelectInput;
