import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzas: [],
    editPizza: false,
    edit: null,
  };

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then((resp) => resp.json())
      .then((json) => this.setState({ pizzas: json }));
  }

  addPizza = (newPizza) => {
    fetch("http://localhost:3000/pizzas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPizza),
    })
      .then((resp) => resp.json())
      .then((json) => this.setState({ pizzas: [...this.state.pizzas, json] }));
  };

  editPizza = (pizza) => {
    this.setState({ editPizza: true, edit: pizza });
  };

  handleEditPizza = () => {};

  renderForm = () => {
    if (this.state.editPizza) {
      return (
        <PizzaForm pizza={this.state.pizza} editPizza={this.handleEditPizza} />
      );
    } else {
      return <PizzaForm addPizza={this.addPizza} />;
    }
  };

  render() {
    return (
      <Fragment>
        <Header />
        {this.renderForm()}
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
