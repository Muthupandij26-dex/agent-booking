// pages/ErrorPage.tsx
import React from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "../components";

const WorkInProgress: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "3.125rem" }}>
      <h1>We will launch this feature soon</h1>
      <p>Thank you for your time.</p>
      <Button
        variant="primary"
        onClick={() => navigate("/")}
        label="Navigate to Home"
      ></Button>
    </div>
  );
};

export default WorkInProgress;
