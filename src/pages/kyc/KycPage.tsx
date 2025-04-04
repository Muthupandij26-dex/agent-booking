import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  LinearProgress,
  MobileStepper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { UseApi } from "../../hooks";
import { FormBuilder } from "../../components";
import {
  createCredentialsFormFields,
  createGeneralFormFields,
  createkycDocumentsFormFields,
} from "./CreateKycFormField";

const steps = ["Personal Details", "KYC Documents", "Credentials"];

const KycPage = () => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useForm({ mode: "all" });

  const { apiCall } = UseApi<any>();

  const [activeStep, setActiveStep] = useState(0);

  // Material-UI Theme & Media Queries
  const theme = useTheme();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));
  console.log("Is Not Desktop", isNotDesktop);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Dynamically Adjust Grid Columns Based on Screen Size
  const gridColumns = isMobile ? 12 : 6;
  // Adjust spacing for mobile

  // Calculate Progress Percentage
  const progress = ((activeStep + 1) / steps.length) * 100;

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = async () => {
    const formData = getValues();

    const payload = {
      general: {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        kycStatus: "PENDING",
        commissions: formData.commissions || "10%",
        status: "ACTIVE",
      },
      kycDocuments: [
        {
          documentType: formData.documentType,
          documentNumber: formData.documentNumber,
          documentFileUrl: formData.documentFileUrl,
        },
      ],
      credentials: {
        loginName: formData.loginName,
        password: formData.password,
      },
    };

    await apiCall({
      method: "put",
      url: "client/agent/creation",
      id: "82038556-7833-4696-948e-1e20c1744923",
      data: payload,
      onSuccess: () => {},
      loaderMessage: "Updating KYC...",
    });

    console.log("Payload", payload);
  };

  return (
    <Box sx={{ maxWidth: { xs: "100%", md: 900 }, mx: "auto", p: 2 }}>
      <Card sx={{ p: 2, boxShadow: 3 }}>
        <CardContent>
          {/* Progress Bar */}
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: 8, mb: 2 }}
          />

          <Box sx={{ p: 2 }}>
            {activeStep === 0 && (
              <FormBuilder
                control={control}
                formFields={() => createGeneralFormFields(gridColumns)}
                errors={errors}
                gridColumns={gridColumns}
              />
            )}
            {activeStep === 1 && (
              <FormBuilder
                control={control}
                formFields={() => createkycDocumentsFormFields(gridColumns)}
                errors={errors}
                gridColumns={gridColumns}
              />
            )}
            {activeStep === 2 && (
              <FormBuilder
                control={control}
                formFields={() => createCredentialsFormFields(gridColumns)}
                errors={errors}
                gridColumns={gridColumns}
              />
            )}
          </Box>

          <MobileStepper
            variant="dots"
            steps={steps.length}
            position="static"
            activeStep={activeStep}
            nextButton={
              activeStep === steps.length - 1 ? (
                <Button
                  size="small"
                  onClick={handleSubmit}
                  variant="contained"
                  color="success"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                >
                  Next
                  <KeyboardArrowRight />
                </Button>
              )
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default KycPage;
