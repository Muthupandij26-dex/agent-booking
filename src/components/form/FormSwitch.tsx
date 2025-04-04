import { Box } from "@mui/material";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const FormSwitch = ({ label, control, name, defaultValue }: FormInputProps) => {
  const IOSSwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 1,
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "white",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
          border: 0,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        border: `6px solid black`,
      },
    },
    "& .MuiSwitch-thumb": {
      width: 24,
      height: 24,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: `#E3E3E3`,
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const Container = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    width: "100%",
    boxSizing: "border-box",
  });

  return (
    <Box
      mt={2}
      sx={{
        border: "1px solid #E3E3E3",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        padding: "0.3125rem 0.5rem 0.3125rem 0.5rem",
      }}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <Container>
            <span
              style={{
                fontFamily: "Medium",
                fontWeight: "500",
                color: `black`,
              }}
            >
              {label}
            </span>
            <IOSSwitch
              checked={value}
              onChange={(e) => onChange(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                "& .Mui-checked": {
                  transform: "translateX(24px) !important",
                },
              }}
            />
          </Container>
        )}
      />
    </Box>
  );
};

export default FormSwitch;
