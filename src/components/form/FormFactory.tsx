import { JSX } from "react";
import { FormFactoryProps } from "./FormBuilder.types";
import FormCheckBox from "./FormCheckbox";
import FormDatePicker from "./FormDatePicker";
import FormInput from "./FormInput";
import FormInputArea from "./FormInputArea";
import FormSwitch from "./FormSwitch";
import FormSelect from "./FormSelect";
import FormMultiSelectInput from "./FormMultiSelect";

const FormFactory = (props: FormFactoryProps): JSX.Element => {
  const renderFormElements = (formFields: FormFactoryProps) => {
    switch (formFields.type) {
      case "textfield":
        return (
          <FormInput
            {...formFields}
            key={formFields.name}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
            style={props.style}
            onChange={formFields.onChange}
          />
        );
      case "textarea":
        return (
          <FormInputArea
            {...formFields}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
          />
        );
      case "switch":
        return (
          <FormSwitch
            {...formFields}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
            style={props.style}
            onChange={formFields.onChange}
          />
        );
      case "select":
        return (
          <FormSelect
            {...formFields}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
            options={props.options}
          />
        );
      // dropdown with no placeholder
      case "selectBox":
        return (
          <FormSelect
            {...formFields}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
          />
        );
      case "multiSelect":
        return (
          <FormMultiSelectInput
            {...formFields}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
          />
        );
      case "checkbox":
        return (
          <FormCheckBox
            {...formFields}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
          />
        );
      case "datepicker":
        return (
          <FormDatePicker
            {...formFields}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
          />
        );
      default:
        console.warn(`Unknown form field type: ${formFields.type}`);
        return null;
    }
  };
  return <>{renderFormElements(props)}</>;
};

export default FormFactory;
