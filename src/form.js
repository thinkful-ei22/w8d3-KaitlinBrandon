import React from 'react';
import './form.css';
import {reduxForm, Field } from 'redux-form';
import { required, notEmpty, lengthOfFive, isNumber } from './validators';
import Input from './input'
import {complaint} from './server';

export class ComplaintForm extends React.Component {
  render() {
    return (
      <form 
      onSubmit={values => this.props.handleSubmit(complaint(values))
      }>
      <div className="formContainer">
        <h2>Report a problem with your delivery</h2>

        <label htmlFor="tracking">Tracking number</label>
        <Field 
          component={Input}
          element="input" 
          type="text" 
          name="tracking" 
          id="Tracking" 
          validate={[required, notEmpty, lengthOfFive, isNumber]} />

        <label htmlFor="issue">What is your issue?</label>
        <Field 
        component={Input}
        element="select" name="issue" 
        id="Issue">
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damanged</option>
          <option value="other">Other (give details below)</option>
        </Field>

        <label htmlFor="details">Give more details (optional)</label>
        <Field component={Input}
        element="textarea" type="input" name="details" id="Details" />

        <button type="submit">Submit</button>

      </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'Complaint'
})(ComplaintForm);