import { Box, Modal, Typography, styled } from "@mui/material";
import React from "react";
import BoxLoader from "./BoxLoader";

interface LoaderModalProps {
  open: boolean; // Control the modal visibility
  message?: string; // Custom message to display
  onClose?: () => void; // Optional onClose handler
}

const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  boxShadow: theme.shadows[5],
  borderRadius: "0.5rem",
  padding: "5rem",
  textAlign: "center",
  minWidth: "300px",
  border: "none",
}));

const LoaderModal: React.FC<LoaderModalProps> = ({
  open,
  message = "Please wait we are saving your data...",
  onClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="loader-modal-title"
      aria-describedby="loader-modal-description"
      disableAutoFocus
    >
      <ModalBox>
        <BoxLoader />
        <Typography
          id="loader-modal-description"
          variant="body1"
          sx={{ marginTop: 4, color: "text.secondary" }}
        >
          {message}
        </Typography>
      </ModalBox>
    </Modal>
  );
};

export default LoaderModal;
