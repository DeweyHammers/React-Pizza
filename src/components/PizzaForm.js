import React, { Component } from "react";

class PizzaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topping: "",
      size: "",
      vegetarian: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newPizza = {
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian === "Vegetarian" ? true : false,
    };
    this.props.addPizza(newPizza);
    this.setState({
      topping: "",
      size: "",
      vegetarian: "",
    });
  };

  render() {
    return (
      <div className="form-row">
        <div className="col-5">
          <input
            type="text"
            name="topping"
            className="form-control"
            placeholder="Pizza Topping"
            value={this.state.topping}
            onChange={this.handleChange}
          />
        </div>
        <div className="col">
          <select
            value={this.state.size}
            onChange={this.handleChange}
            className="form-control"
            name="size"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Vegetarian"
              name="vegetarian"
              checked={this.state.vegetarian === "Vegetarian"}
              onChange={this.handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
              name="vegetarian"
              checked={this.state.vegetarian === "Not Vegetarian"}
              onChange={this.handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PizzaForm;
