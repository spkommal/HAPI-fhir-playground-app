import React from "react";
import TextError from "./TextError";
import { Field, ErrorMessage } from "formik";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="controls">
      <label htmlFor={name}>{label}</label>
      <Field type="text" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
export default Input;
