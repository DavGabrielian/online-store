import React, { Component } from "react";
import { storePhones, storeTablets, storeWatches, detailProduct } from "./Data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    phone: storePhones,
    tablet: storeTablets,
    watch: storeWatches,
    detailProduct: detailProduct,
  };

  handleDetail = () => {
    console.log("hello detail");
  };

  addToCart = (id) => {
    console.log(`hello cart. id is ${id}`);
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
