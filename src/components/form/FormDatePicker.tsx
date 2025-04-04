import { ErrorMessage } from "@hookform/error-message";
import { Box, FormControl, FormLabel, useTheme } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { Controller } from "react-hook-form";
import { CalendarIcon } from "../../assets";
import { JSX } from "react";
import { FormInputProps } from "./FormInputProps";

const FormDatePicker = ({
  name,
  control,
  rules,
  label,
  errors,
  defaultValue,
}: FormInputProps): JSX.Element => {
  const theme = useTheme();

  const formControlStyle = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={
        defaultValue
          ? dayjs(
              defaultValue as string | number | Date | Dayjs | null | undefined,
            )
          : null
      }
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl fullWidth sx={formControlStyle}>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <FormLabel
                sx={{
                  color: theme.palette.secondary.main,
                  fontFamily: "Medium",
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
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={value !== undefined ? dayjs(value) : null}
                    onChange={(dateObject) => {
                      const date =
                        dateObject && new Date(dateObject?.toString());
                      onChange(date?.toISOString());
                    }}
                    format={
                      value !== undefined && value !== null
                        ? "DD-MM-YYYY"
                        : "DD-MM-YYYY"
                    }
                    slots={{ openPickerIcon: CalendarIcon }}
                    sx={{
                      width: "100%",
                      color: theme.palette.secondary.main,
                      "& .MuiInputBase-input": {
                        padding: "0.4375rem 0.5rem",
                        color: theme.palette.black.main,
                        borderRadius: "0.5rem ! important",
                      },
                      "& .MuiInputBase-root": {
                        borderRadius: "0.5rem",
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
                      "& .MuiOutlinedInput-input": {
                        borderColor: theme.palette.secondary.main,
                      },
                    }}
                  />
                </LocalizationProvider>
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
              </Box>
            </Box>
          </FormControl>
        );
      }}
    />
  );
};

export default FormDatePicker;
