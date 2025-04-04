import { FormField } from "../../components/form/FormBuilder.types";

export const createGeneralFormFields = (gridColumns: number): FormField[] => {
  return [
    {
      name: "name",
      label: "Name",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
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
      name: "mobile",
      label: "Mobile",
      type: "textfield",
      defaultValue: "",
      rules: {
        required: "",
      },
      gridColumns: gridColumns,
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
      type: "textfield",
      gridColumns: gridColumns,
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
      label: "User Name",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
    {
      name: "password",
      label: "Password",
      type: "textfield",
      gridColumns: gridColumns,
      rules: {
        required: "",
      },
    },
  ];
};
