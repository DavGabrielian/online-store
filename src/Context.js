import React, { Component } from "react";
import { storePhones, detailPhones } from "./Data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    phone: storePhones,
    detailProduct: detailPhones,
  };

  handleDetail = () => {
    console.log("hello detail");
  };

  addToCart = () => {
    console.log("hello cart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
