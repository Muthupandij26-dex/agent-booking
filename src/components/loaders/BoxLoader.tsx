import { Box, styled } from "@mui/material";

const StyledBoxLoader = styled(Box)(({ theme }) => ({
  width: "64px", // Increased size
  height: "64px", // Increased size
  margin: "auto",
  position: "relative",
  "&:before": {
    content: '""',
    width: "64px", // Match the loader size
    height: "6px", // Adjust height proportionally
    background: `${theme.palette.primary.main}50`, // Use theme's light primary color with transparency
    position: "absolute",
    top: "80px", // Adjust based on increased size
    left: "0",
    borderRadius: "50%",
    animation: "shadow324 0.5s linear infinite",
  },
  "&:after": {
    content: '""',
    width: "100%",
    height: "100%",
    background: theme.palette.primary.main, // Use theme's main primary color
    position: "absolute",
    top: "0",
    left: "0",
    borderRadius: "0.25rem",
    animation: "jump7456 0.5s linear infinite",
  },
  "@keyframes jump7456": {
    "15%": {
      borderBottomRightRadius: "3px",
    },
    "25%": {
      transform: "translateY(12px) rotate(22.5deg)", // Adjust for increased size
    },
    "50%": {
      transform: "translateY(24px) scale(1, .9) rotate(45deg)", // Adjust for increased size
      borderBottomRightRadius: "50px", // Adjust for increased size
    },
    "75%": {
      transform: "translateY(12px) rotate(67.5deg)", // Adjust for increased size
    },
    "100%": {
      transform: "translateY(0) rotate(90deg)",
    },
  },
  "@keyframes shadow324": {
    "0%, 100%": {
      transform: "scale(1, 1)",
    },
    "50%": {
      transform: "scale(1.2, 1)",
    },
  },
}));

const BoxLoader = () => {
  return <StyledBoxLoader />;
};

export default BoxLoader;
