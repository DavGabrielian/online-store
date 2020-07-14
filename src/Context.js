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

  getPhone = (id) => {
    const product = this.state.phone.find((item) => item.id === id);
    return product;
  };
  getTablet = (id) => {
    const product = this.state.tablet.find((item) => item.id === id);
    return product;
  };
  getWatch = (id) => {
    const product = this.state.watch.find((item) => item.id === id);
    return product;
  };

  handlePhoneDetail = (id) => {
    const product = this.getPhone(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  handleTabletDetail = (id) => {
    const product = this.getTablet(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };


  handleWatchDetail = (id) => {
    const product = this.getWatch(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    console.log(`hello cart. id is ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handlePhoneDetail: this.handlePhoneDetail,
          handleTabletDetail: this.handleTabletDetail,
          handleWatchDetail: this.handleWatchDetail,
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
