import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    const updatedForm = {...this.props.form, [e.target.name]: e.target.value}

    console.log(updatedForm)

    this.props.updateState(updatedForm)
  }

  render() {
    return (
      <form>
        <label htmlFor="number">Converter: </label>

        <input type="number" id="number" name="number" placeholder="number" className="number" onChange={(e) => this.handleChange(e) }/>

        <select name="fromUnit" id="formUnit" className="unit" value={this.props.form.fromUnit} onChange={(e) => this.handleChange(e) }>
          <option>-- Please Select --</option>
          <option value="carreau">Carreau</option>
          <option value="centiemes">Centiemes</option>
          <option value="hectare">Hectare</option>
        </select>

        <label htmlFor="toUnit">To</label>

        <select name="toUnit" id="toUnit" className="unit" onChange={(e) => this.handleChange(e) }>
          <option value="acres">Acres</option>
          <option value="squareFeet">Square Feet</option>
          <option value="squareMeters">Square Meters</option>
        </select>
      </form>
    )
  }
}

export default Form;
