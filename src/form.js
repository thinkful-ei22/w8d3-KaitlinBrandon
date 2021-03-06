import React from 'react';
import './form.css';
import {reduxForm, Field } from 'redux-form';
import { required, notEmpty, lengthOfFive, isNumber } from './validators';
import Input from './input'
import {complaint} from './server';

const lengthOf = lengthOfFive(5);

export class ComplaintForm extends React.Component {
    
  render() {

    let returnedMessage = '';

    if (this.props.submitSucceeded) {
      returnedMessage = <div className="message message-success">Report submitted successfully</div>
    } else if (this.props.submitFailed) {
      returnedMessage = <div className="message message-error">Delivery not found</div>
    } else {
      returnedMessage = '';
    }



    return (
      <form 
      onSubmit={this.props.handleSubmit(values => {
        console.log('values', values)
        return complaint(values)
      })}>
      <div className="formContainer">
        <h2>Report a problem with your delivery</h2>

        <div className="successToggle">{returnedMessage}</div>
        
        <label htmlFor="tracking">Tracking number</label>
        <Field 
          component={Input}
          element="input" 
          type="text" 
          name="trackingNumber" 
          id="trackingNumber" 
          validate={[required, notEmpty, lengthOf, isNumber]} />

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
  form: 'Complaint',
  initialValues: {issue: 'not-delivered'}
})(ComplaintForm);