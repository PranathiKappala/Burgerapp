import React, { Component } from "react";
import axios from "../../axios";
import Order from "../../components/Order";
export default class Orders extends Component {
  state = { loading: true, orders: [] };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        console.log(res);
        let ordersArr = [];
        for (let key in res.data) {
          ordersArr.push({ ...res.data[key], id: key });
        }
        console.log(ordersArr);
        this.setState({ loading: false, orders: ordersArr });
      })
      .catch((err) => this.setState({ loading: false }));
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}
