import React, { Component } from 'react';

class Result extends Component {
  render() {
    var resultHTML = <div></div>;
    if (this.props.form.number != null && this.props.form.number != '') {
      resultHTML = <span className="result">
                      <span>{this.props.form.number} {this.props.form.fromUnit} = </span>
                      <span className='converted'>{this.props.result} {this.props.form.toUnit}</span>
                    </span>
    }
    return resultHTML;
  }
}


export default Result;
