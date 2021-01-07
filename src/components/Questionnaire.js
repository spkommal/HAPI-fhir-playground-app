import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";
import { FhirJsonForm, FhirJsonResp } from "fhirformjs";
import Button from "react-bootstrap/Button";
const testQsn = require("../assets/questionnaire.json");

function Questionnaire() {
  const initialValues = {
    allergies: "",
    gender: "",
    dob: "",
    country: "",
    maritalStatus: "",
    smoke: "",
    alchohol: "",
  };
  const smokeOptions = [
    { key: "Yes", value: "true" },
    { key: "No", value: "false" },
  ];
  const alchoholOptions = [
    { key: "Yes", value: "true" },
    { key: "No", value: "false" },
  ];
  const allergiesOptions = [
    { key: "Yes", value: "true" },
    { key: "No", value: "false" },
  ];
  const textOnly = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
  const regDOB = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
  const vaidationSchema = Yup.object({
    gender: Yup.string()
      .required("Please enter your Gender.")
      .matches(textOnly, "Please enter valid gender value"),
    dob: Yup.string()
      .required("Please enter your Date of Birth.")
      .matches(regDOB, "Please enter valid DOB"),
    country: Yup.string()
      .required("Please enter your Country")
      .matches(textOnly, "Please enter valid country name"),
    maritalStatus: Yup.string()
      .required("Please enter Marital Status")
      .matches(textOnly, "Please enter a valid value"),
    smoke: Yup.string().required("Please select if you smoke"),
    alchohol: Yup.string().required("Please select if you drink alchohol"),
    allergies: Yup.string().required("Please select if you have any allergies"),
  });
  const [schemaState] = useState(testQsn);
  let finalAns, finalAnsArr;
  const [tableData, setTableData] = useState([]);
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    const schemaRes = FhirJsonResp(FhirJsonForm(schemaState).model, values);
    schemaRes.item[0].answer[0].valueBoolean = values.allergies;
    schemaRes.item[1].answer[0].valueString = values.gender;
    schemaRes.item[2].answer[0].valueDate = values.dob;
    schemaRes.item[3].answer[0].valueString = values.country;
    schemaRes.item[4].answer[0].valueString = values.maritalStatus;
    schemaRes.item[5].answer[0].valueBoolean = values.smoke;
    schemaRes.item[6].answer[0].valueBoolean = values.alchohol;
    console.log(schemaRes);
    finalAnsArr = schemaRes.item.map((el) => el);
    finalAns = finalAnsArr.map((el) => el.answer);
    setTableData((tableData) => [...tableData, finalAns]);
    resetForm(initialValues);
    setSubmitting(false);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <Formik
          initialValues={initialValues}
          validationSchema={vaidationSchema}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(formik) => (
            <Form>
              <div className="row">
                <div className="question-header col-md-12 col-sm-12">
                  <h2>Patient</h2>
                </div>
                <div className="col-md-6 col-sm-12">
                  <FormControl
                    control="radio"
                    label="Do you have allergies?"
                    name="allergies"
                    options={allergiesOptions}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="question-subheader">
                    <h4>General Questions</h4>
                  </div>

                  <FormControl
                    control="input"
                    type="text"
                    label="What is your gender?"
                    name="gender"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="What is your date of birth?"
                    name="dob"
                    placeholder="dd/mm/yyyy"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="What is your country of birth?"
                    name="country"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="What is your marital status?"
                    name="maritalStatus"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="question-subheader">
                    <h4>Intoxications</h4>
                  </div>

                  <FormControl
                    control="radio"
                    label="Do you smoke?"
                    name="smoke"
                    options={smokeOptions}
                  />
                  <FormControl
                    control="radio"
                    label="Do you drink alchohol?"
                    name="alchohol"
                    options={alchoholOptions}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                  <Button
                    type="submit"
                    variant="outline-secondary"
                    className="submit-button"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="row">
          <div className="col-md-12">
            <table>
              <thead>
                <tr>
                  <th>Allergies</th>
                  <th>Gender</th>
                  <th>Date of Birth</th>
                  <th>Country</th>
                  <th>Marital Status</th>
                  <th>Smoke</th>
                  <th>Alchohol</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((tableParent, index) => {
                  return (
                    <tr key={index}>
                      {tableParent.map((tablerow, index) => (
                        <td key={index}>
                          {tablerow[0][Object.keys(tablerow[0])]}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Questionnaire;
