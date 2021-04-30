import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import productData from "./product";
import Product from "./components/Product.jsx";

class App extends Component {
  state = {
    cartItemNumber: 0,
    products: productData,
    cartItem: [],
  };

  buttonHandler = (event) => {
    let newItem = event.target.value;
    let oldItem = this.state.cartItem;
    let cartItem = [newItem, ...oldItem];
    let cartItemNumber = cartItem.length;
    this.setState({
      cartItem,
      cartItemNumber
    });
  };

  render() {
    return (
      <>
        <Navbar cartItemNumber = {this.state.cartItemNumber}></Navbar>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {this.state.products.map((product, index) => {
              return (
                <div className="col" key={index}>
                  <Product
                    product={product}
                    buttonHandler={this.buttonHandler}
                  ></Product>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
