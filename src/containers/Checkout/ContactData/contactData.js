import React, { Component } from "react";
import Spinner from "../../../components/UI/Spinner/spinner";
import axios from "../../../axios";
export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
    },
    loading: false,
  };
  handleFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: this.state.name,
        address: {
          street: "Teststreet",
          country: "India",
        },
        email: this.state.email,
      },
      deliveryMethod: "fastest",
    };
    //it creates a orders node and stores data beneath that node.json is an end point u need to target firebase
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            <h4>Enter your Contact Data</h4>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={this.handleFormChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Your email"
              onChange={this.handleFormChange}
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              onChange={this.handleFormChange}
            />
            <button onClick={this.orderHandler} className="btn btn-success">
              ORDER
            </button>
          </div>
        )}
      </div>
    );
  }
}
