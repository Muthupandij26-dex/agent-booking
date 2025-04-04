import { Grid } from "@mui/material";
import { FormBuilderProps, FormField } from "./FormBuilder.types";
import { JSX } from "react";
import FormFactory from "./FormFactory";

const FormBuilder = (props: FormBuilderProps): JSX.Element => {
  const formFields = props
    .formFields()
    .filter((field: FormField) => field.hide !== true);

  return (
    <Grid container spacing={2} style={props.gridContainer}>
      {formFields.map((field: FormField, index: number) => {
        return (
          <Grid
            item
            xs={field?.gridColumns || props.gridColumns || 6}
            style={props.gridChild}
            key={index}
          >
            <FormFactory
              {...field}
              control={props.control}
              errors={props.errors}
              rules={field.rules}
              style={props?.style}
              onChange={field.onChange}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FormBuilder;
