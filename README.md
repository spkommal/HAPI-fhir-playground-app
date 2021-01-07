# HAPI FHIR Playground: Basic Test App - Submission - Sri Priyanka

This submission is for the below Intermediate tasks.
Download the project to your working directory.
run 'npm install' to download all the necessary modules.
run 'npm start' to start the project.

### Intermediate Tasks:

- [ ] Add `Questionnaire` componenent, generate a form using the `questionnaire.json` file in the `assets` folder. The form should have validation applied to each input and form input elements should be controlled component.

- [ ] Using the results from the form, generate a [`QuestionnaireResponse`](https://www.hl7.org/fhir/questionnaireresponse.html). The `QuestionnaireResponse` should follow the structure outlined in the [Resource Content Section](https://www.hl7.org/fhir/questionnaireresponse.html#resource)

- [ ] Display your results in a neat and clean manner.

- [ ] Update the `Questionnaire` Component to be mobile-friendly.

- [ ] Please include unit tests for your work.

- [ ] Commit your work.

### Results:

- [ ] The 'Questionnaire' component renders the form for the `questionnaire.json` file. 'react-formik' library is used to build the form, manage the validations and make the form input elements controlled components.

- [ ] The results from the form generate a `QuestionnaireResponse`. The response has the structure outlined in the [Resource Content Section](https://www.hl7.org/fhir/questionnaireresponse.html#resource). To build the structure based on the schema of the questionnaire, 'fhirformjs' library is used. The response can be seen in the console. I was not clear if the generated response needs to be posted to API. Hence, I logged the response to console.

- [ ] The results from the form are displayed in the table below.

- [ ] The Questionnaire component is mobile-friendly. Simple bootstrap classes have been added to make the form mobile-friendly.

- [ ] The code is refactored well for the form components.

- [ ] Unit tests are not added.

### Improvements:

The following improvements can be made :

- [ ] Seperate the table component and the form component.
- [ ] questionnaire.json can be used to auto-generate the form.
