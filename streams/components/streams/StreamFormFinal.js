import React from "react";
import { Form, Field } from "react-final-form";

const required = (value) => (value ? undefined : "Required");
const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);
const minValue = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

class StreamFormFinal extends React.Component {
  renderError(meta) {
    const { touched, error } = meta;
    // console.log(meta);
    // console.log(error);

    if (touched && error) {
      // console.log("error");
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    //console.log(this.props);
    const { initialValues } = this.props;
    return (
      <Form
        initialValues={initialValues}
        onSubmit={(values) => {
          // send values to the cloud
          this.props.onSubmit(values);
        }}
        validate={(values) => {
          // do validation here, and return errors object
        }}
      >
        {({ handleSubmit, pristine, reset, submitting }) => (
          <form onSubmit={handleSubmit} className="ui form error">
            <Field
              name="title"
              validate={required}
              component={this.renderInput}
              label="render Title"
            />
            <Field
              name="description"
              validate={required}
              component={this.renderInput}
              label="render Description"
            />
            <Field
              name="age"
              validate={composeValidators(required, mustBeNumber, minValue(10))}
              component={this.renderInput}
              label="render Age"
            />

            <button className="ui button primary">Submit</button>
          </form>
        )}
      </Form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "enter a title required ";
  }
  if (!formValues.description) {
    errors.description = "enter a descripton";
  }
  return errors;
};

export default StreamFormFinal;
