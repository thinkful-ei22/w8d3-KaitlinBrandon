import React from 'react';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
      if (!prevProps.meta.active && this.props.meta.active) {
          this.input.focus();
      }
  }
  render() {
      const Element = this.props.element || 'input';
      // choose what sort of element you want - input, select, etc

      let error;
      if (this.props.meta.touched && this.props.meta.error) {
        // contains any error associated with the field
        error = <div className="form-error">{this.props.meta.error}</div>;
      }

      let warning;
      if (this.props.meta.touched && this.props.meta.warning) {
          warning = (
              <div className="form-warning">{this.props.meta.warning}</div>
          );
      }

      return (
          <div className="form-input">
              <label htmlFor={this.props.input.name}>
                  {this.props.label}
                  {error}
                  {warning}
              </label>
              <Element
                  {...this.props.input}
                  id={this.props.input.name}
                  type={this.props.type}
                  ref={input => (this.input = input)}
              >
                  {this.props.children}
              </Element>
          </div>
      );
  }
}