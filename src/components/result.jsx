import React, { Component } from 'react';

class Result extends Component {
  render() {
    var resultString = '';
    if (this.props.form.number != null && this.props.form.number != '') {
      resultString = `result is: ${this.props.form.number} ${this.props.form.fromUnit} = ${this.props.result} ${this.props.form.toUnit}`
    }
    return (
      <label>{resultString}</label>
    )
  }
}


export default Result;
