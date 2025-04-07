import { FieldValues, UseFormSetValue } from "react-hook-form";
import { FormField } from "../../components/form/FormBuilder.types";

export const createGeneralFormFields = (gridColumns: number): FormField[] => {
  return [
    {
      name: "name",
      label: "Name",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "Name is required",
      },
    },
    {
      name: "mobile",
      label: "Mobile",
      type: "textfield",
      defaultValue: "",
      rules: {
        required: "Mobile is required",
      },
      gridColumns: gridColumns,
    },
    {
      name: "email",
      label: "Email",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
    {
      name: "street",
      label: "Street",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
    {
      name: "city",
      label: "City",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
    {
      name: "state",
      label: "State",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
    {
      name: "zipCode",
      label: "Pin Code",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
    {
      name: "commissions",
      label: "Commissions",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
  ];
};

export const createkycDocumentsFormFields = (
  gridColumns: number,
  setValue: UseFormSetValue<FieldValues>,
): FormField[] => {
  return [
    {
      name: "documentType",
      label: "Document Type",
      type: "select",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
      options: [
        { label: "Aadhar", value: "aadhar" },
        { label: "Passport", value: "passport" },
        { label: "Driving License", value: "drivingLicense" },
        { label: "Voter ID", value: "voterId" },
      ],
    },
    {
      name: "documentNumber",
      label: "Number",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
    {
      name: "documentFileUrl",
      label: "Document File",
      type: "attachment",
      gridColumns: 12,
      s3FolderName: "/proofs",
      setValue: setValue,
      rules: {
        required: "",
      },
    },
  ];
};

export const createCredentialsFormFields = (
  gridColumns: number,
): FormField[] => {
  return [
    {
      name: "loginName",
      label: " New User Name",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
    {
      name: "password",
      label: "New Password",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
  ];
};
