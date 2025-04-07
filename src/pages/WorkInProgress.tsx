// pages/ErrorPage.tsx
import React from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { Box, Typography, useTheme } from "@mui/material";

const WorkInProgress: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        gap: "2rem",
      }}
    >
      <Typography
        sx={{
          fontSize: theme.typography.h2,
          color: theme.palette.primary.main,
        }}
      >
        We will launch this feature soon
      </Typography>
      <Typography
        sx={{
          fontSize: theme.typography.h3,
          color: theme.typography.subtitle2,
        }}
      >
        " Thank you for your time "
      </Typography>
      <Button
        variant="primary"
        onClick={() => navigate("/kycDetails")}
        label="Navigate to Home"
      ></Button>
    </Box>
  );
};

export default WorkInProgress;
