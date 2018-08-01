import React from 'react';
import './form.css'

export default class ComplaintForm extends React.Component {
  render() {
    return (
      <div className="formContainer">
        <h2>Report a problem with your delivery</h2>

        <label htmlFor="tracking">Tracking number</label>
        <input type="text" name="tracking" id="Tracking" />

        <label htmlFor="issue">What is your issue?</label>
        <select name="input" id="Input">
          <option value="notArrived">My delivery hasn't arrived</option>
          <option value="wrongItem">The wrong item was delivered</option>
          <option value="missing">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damanged</option>
          <option value="other">Other (give details below)</option>
        </select>

        <label htmlFor="details">Give more details (optional)</label>
        <textarea type="input" name="details" id="Details" />

        <button>Submit</button>

      </div>
    )
  }
}