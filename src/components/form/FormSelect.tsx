import { ErrorMessage } from "@hookform/error-message";
import { FormControl, FormLabel, useTheme } from "@mui/material";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { FormInputProps } from "./FormInputProps";
import { JSX } from "react";

const FormSelect = ({
  name,
  control,
  rules,
  label,
  errors,
  defaultValue,
  options,
  disabled,
  placeholder,
  handleSelectInputChange,
}: FormInputProps): JSX.Element => {
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
            //isClearable
            isSearchable
            value={
              options?.find(
                (option: { label: string | number; value: string | number }) =>
                  option.value === value,
              ) || null
            }
            onInputChange={(inputValue, actionMeta) => {
              if (handleSelectInputChange) {
                handleSelectInputChange(inputValue, actionMeta);
              }
            }}
            options={options}
            onChange={(newValue) => onChange(newValue ? newValue.value : null)}
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
                fontWeight: state.isFocused ? 400 : 500,
                fontSize: "0.875rem",
                color:
                  state.isFocused || state.isSelected
                    ? theme.palette.primary.main
                    : theme.palette.black.main,
                backgroundColor:
                  state.isFocused || state.isSelected
                    ? theme.palette.highlightcolor.main
                    : base.backgroundColor,
                ":hover": {
                  backgroundColor: state.isSelected
                    ? theme.palette.highlightcolor.main
                    : theme.palette.highlightcolor.main,
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

export default FormSelect;
