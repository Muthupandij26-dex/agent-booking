import {
  Box,
  FormControl,
  FormLabel,
  InputBase,
  useTheme,
} from "@mui/material";
import { JSX } from "react";

type DexInputType = {
  label?: string;
  placeholder?: string;
  value?: string | number;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  autoCapitalize?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
  errorMessage?: string;
  name?: string;
};

const DexInput = (props: DexInputType): JSX.Element => {
  const theme = useTheme();
  return (
    <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
      <FormLabel
        sx={{
          fontSize: theme.typography.subtitle2,
          "& .Mui-focused": {
            color: theme.palette.secondary.main,
          },
          alignSelf: "flex-start",
        }}
      >
        {props.label}
        {props.required && (
          <span
            style={{
              marginLeft: "0.25rem",
              color: theme.palette.error.main,
              fontSize: theme.typography.subtitle2.fontSize,
            }}
          >
            *
          </span>
        )}
      </FormLabel>
      <InputBase
        name={props.name}
        placeholder={props.placeholder || ""}
        disabled={props.disabled || false}
        autoFocus={props.autoFocus || false}
        autoCapitalize={props.autoCapitalize || "off"}
        value={props.value}
        onChange={props.handleChange}
        type={props.isPassword ? "password" : "text"}
        sx={{
          border: `1px solid ${theme.palette.stroke.main}`,
          borderRadius: "0.25rem",
          width: "100%",
          minHeight: "35px",
          "& .MuiInputBase-input": {
            fontSize: theme.typography.subtitle2,
            paddingLeft: "0.5rem",
            paddingTop: "0.375rem",
            color: theme.palette.secondary.main,
            "&::placeholder": {
              color: theme.palette.secondary.main,
              fontSize: theme.typography.subtitle2,
            },
          },
          "& .MuiOutlinedInput-root.Mui-Disabled": {
            color: theme.palette.secondary.main,
            opacity: 1,
          },
        }}
      />
      {props?.errorMessage && (
        <Box
          sx={{
            alignSelf: "flex-start",
            fontFamily: "Medium",
            color: theme.palette.error.main,
          }}
        >
          {props.errorMessage}
        </Box>
      )}
    </FormControl>
  );
};

export default DexInput;
