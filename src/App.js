import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout";
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
        <BrowserRouter>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
        </BrowserRouter>
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
