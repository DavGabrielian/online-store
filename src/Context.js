import React, { Component } from "react";
import { storePhones, storeTablets, storeWatches, detailProduct } from "./Data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    phone: storePhones,
    tablet: storeTablets,
    watch: storeWatches,
    detailProduct: detailProduct,
    cart: storePhones,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
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

  addPhoneToCart = (id) => {
    let tempProducts = [...this.state.phone];
    const index = tempProducts.indexOf(this.getPhone(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { phone: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  addTabletToCart = (id) => {
    let tempProducts = [...this.state.tablet];
    const index = tempProducts.indexOf(this.getTablet(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { tablet: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  addWatchToCart = (id) => {
    let tempProducts = [...this.state.watch];
    const index = tempProducts.indexOf(this.getWatch(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { watch: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openModal = (id) => {
    const product = this.getPhone(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    console.log("increment method");
  };

  decrement = (id) => {
    console.log("decrement method");
  };

  removeItem = (id) => {
    console.log("remove method");
  };
  clearCart = (id) => {
    console.log("clear method");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handlePhoneDetail: this.handlePhoneDetail,
          handleTabletDetail: this.handleTabletDetail,
          handleWatchDetail: this.handleWatchDetail,
          addPhoneToCart: this.addPhoneToCart,
          addTabletToCart: this.addTabletToCart,
          addWatchToCart: this.addWatchToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
