import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/form';
import Result from './components/result';

class App extends Component {

  constructor() {
    super();

    this.updateState = this.updateState.bind(this);
    this.convert = this.convert.bind(this);

    this.state = {
      result: null,
      form: {
        number: null,
        fromUnit: "carreau",
        toUnit: "acres"
      }
    }

    this.ratios = {
      carreau: {
        squareFeet: 138854.4,
        acres: 3.1876,
        squareMeters: 12900
      },

      hectare: {
        squareMeters: 10000,
        squareFeet: 107639,
        acres: 2.4710
      },

      centiemes: {
        squareFeet: 1388.544,
        acres: 0.031876,
        squareMeters: 129
      }
    }
  }

  updateState(form) {
    this.setState({ form });
    const result = this.convert(form.number, form.fromUnit, form.toUnit);
    this.setState({ result });
  }

  convert(value, fromUnit, toUnit) {
    var rawResult = value * this.ratios[fromUnit][toUnit];
    return parseFloat(Math.round(rawResult * 100) / 100).toFixed(2)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Haiti Land Unit Converter</h2>
        </div>
        <div className="App-body">
          <Form form={this.state.form} updateState={this.updateState} />
          <Result result={this.state.result} form={this.state.form} />
        </div>
      </div>
    );
  }
}

export default App;
