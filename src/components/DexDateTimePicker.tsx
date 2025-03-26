import { Box, FormControl, FormLabel, useTheme } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { CalendarIcon } from "../assets";

interface DexDateTimePickerProps {
  label: string;
  value?: string | null;
  onChange: (date: string | null) => void;
  disableDate?: string;
  disablePast?: boolean;
  disabled?: boolean;
  required?: boolean;
}

const DexDateTimePicker: React.FC<DexDateTimePickerProps> = ({
  label,
  value,
  onChange,
  disableDate,
  disablePast,
  disabled,
  required,
}) => {
  const theme = useTheme();

  return (
    <FormControl fullWidth sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FormLabel
          sx={{
            color: theme.palette.secondary.main,
            marginBottom: "0.3125rem",
            fontSize: theme.typography.subtitle2,
            "&.Mui-focused": {
              color: theme.palette.secondary.main,
            },
          }}
        >
          {label}
          {required && (
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
            <DateTimePicker
              value={value ? dayjs(value) : dayjs()} // Set default value to current date-time
              onAccept={(dateObject) => {
                const date = dateObject && new Date(dateObject?.toString());
                onChange(date?.toISOString() || null);
              }}
              format="DD-MM-YYYY HH:mm"
              disabled={disabled || false}
              minDate={
                disablePast
                  ? disableDate
                    ? dayjs(disableDate)
                    : dayjs()
                  : undefined
              }
              slots={{ openPickerIcon: CalendarIcon }}
              sx={{
                width: "100%",
                color: theme.palette.secondary.main,
                "& .MuiInputBase-input": {
                  padding: "0.5rem 0.625rem",
                  fontSize: theme.typography.subtitle2,
                  borderRadius: "0.5rem !important",
                },
                "& .MuiInputBase-root": {
                  borderRadius: "0.5rem",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #D5D6D6 !important",
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
                "& .Mui-disabled": {
                  opacity: 1,
                  WebkitTextFillColor:
                    theme.palette.primary.main + " !important",
                  background: theme.custom.linearGradient,
                  borderRadius: "8px",
                },
              }}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </FormControl>
  );
};

export default DexDateTimePicker;
