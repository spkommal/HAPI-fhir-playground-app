import React from "react";
import TextError from "./TextError";
import { Field, ErrorMessage } from "formik";
const RadioButton = function (props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="controls">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default RadioButton;
