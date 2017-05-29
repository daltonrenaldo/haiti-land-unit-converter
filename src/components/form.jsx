import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const updatedForm = {...this.props.form, [e.target.name]: e.target.value}
    this.props.updateState(updatedForm)
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="number">Convert: </label>
          <input type="number" id="number" name="number" placeholder="number" className="number" onChange={(e) => this.handleChange(e) }/>
        </div>

        <div>
          <label htmlFor="frommUnit">&nbsp;</label>
          <select name="fromUnit" id="fromUnit" className="unit" value={this.props.form.fromUnit} onChange={(e) => this.handleChange(e) }>
            <option>-- Please Select --</option>
            <option value="carreau">Carreau</option>
            <option value="centiemes">Centiemes</option>
            <option value="hectare">Hectare</option>
          </select>
        </div>

        <div>
          <label htmlFor="toUnit">To</label>
          <select name="toUnit" id="toUnit" className="unit" value={this.props.form.toUnit} onChange={(e) => this.handleChange(e) }>
            <option>-- Please Select --</option>
            <option value="acres">Acres</option>
            <option value="squareFeet">Square Feet</option>
            <option value="squareMeters">Square Meters</option>
          </select>
        </div>
      </form>
    )
  }
}

export default Form;
