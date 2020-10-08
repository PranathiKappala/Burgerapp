import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout";
import Orders from "./containers/Orders";
function App() {
  // const handleCanvas = () => {
  //   var c = document.getElementById("newCanvas");
  //   var ctx = c.getContext("2d");
  //   ctx.fillStyle = "gray";
  //   ctx.fillRect(0, 0, 500, 350);
  //   ctx.clearRect(0, 0, 50, 100);
  // };
  return (
    <div className="App">
      <Layout>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/" exact component={BurgerBuilder} />
      </Layout>
      {/* <canvas
        id="newCanvas"
        style={{ border: "2px solid blue", width: "500px", height: "350px" }}
      ></canvas>
      <button onClick={handleCanvas}>Canvas</button> */}
    </div>
  );
}

export default App;
