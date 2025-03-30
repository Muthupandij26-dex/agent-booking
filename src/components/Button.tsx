import { useTheme } from "@mui/material/styles";
import { styled, Button } from "@mui/material";
import { CSSProperties } from "styled-components";
import { JSX } from "react";

export type ButtonType = {
  variant: "primary" | "secondary" | "tertiary" | "text";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  requiredPermission?: string;
  style?: CSSProperties;
};

export const StyledButton = styled(Button)({
  textTransform: "capitalize",
  boxShadow: "none",
  minWidth: "120px",
  fontFamily: "Medium",
  height: "35px",
  borderRadius: "8px",
});

const DexButton = (props: ButtonType): JSX.Element => {
  const theme = useTheme();

  const renderButton = () => {
    switch (props.variant) {
      case "primary":
        return (
          <StyledButton
            variant="contained"
            disabled={props.disabled}
            color="primary"
            onClick={props.onClick}
          >
            {props.label}
          </StyledButton>
        );
      case "secondary":
        return (
          <StyledButton
            variant="contained"
            disabled={props.disabled}
            color="secondary"
            onClick={props.onClick}
          >
            {props.label}
          </StyledButton>
        );
      case "tertiary":
        return (
          <StyledButton
            variant="outlined"
            disabled={props.disabled}
            color="inherit"
            onClick={props.onClick}
            sx={{
              border: `1px solid ${theme.palette.stroke.main}`,
              color: theme.palette.primary.main,
              ...props?.style,
            }}
          >
            {props.label}
          </StyledButton>
        );
    }
  };
  return <>{renderButton()}</>;
};

export default DexButton;
