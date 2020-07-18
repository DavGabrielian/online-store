import React, { Component } from "react";
import { storePhones, storeTablets, storeWatches, detailProduct } from "./Data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    phone: storePhones,
    tablet: storeTablets,
    watch: storeWatches,
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartDelivery: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setPhones();
    this.setTablets();
    this.setWatches();
  }

  setPhones = () => {
    let tempPhones = [];
    storePhones.forEach((item) => {
      const singleItem = { ...item };
      tempPhones = [...tempPhones, singleItem];
    });
    this.setState(() => {
      return { phone: tempPhones };
    });
  };
  setTablets = () => {
    let tempTablets = [];
    storeTablets.forEach((item) => {
      const singleItem = { ...item };
      tempTablets = [...tempTablets, singleItem];
    });
    this.setState(() => {
      return { tablet: tempTablets };
    });
  };
  setWatches = () => {
    let tempWatches = [];
    storeWatches.forEach((item) => {
      const singleItem = { ...item };
      tempWatches = [...tempWatches, singleItem];
    });
    this.setState(() => {
      return { watch: tempWatches };
    });
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
        this.addTotal();
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
        this.addTotal();
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
        this.addTotal();
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

  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempDelivery = subTotal * 0.06;
    const deliver = parseFloat(tempDelivery.toFixed(2));
    const total = subTotal + deliver;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartDelivery: deliver,
        cartTotal: total,
      };
    });
  };

  increment = (id) => {
    console.log("increment method");
  };

  decrement = (id) => {
    console.log("decrement method");
  };

//  the bug was fixed,
//  kinda ????

  removePhone = (id) => {
    let tempPhones = [...this.state.phone];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    const indexPhone = tempPhones.indexOf(this.getPhone(id));
    let removedPhone = tempPhones[indexPhone];
    removedPhone.inCart = false;
    removedPhone.count = 0;
    removedPhone.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          phone: [...tempPhones],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  removeTablet = (id) => {
    let tempTablets = [...this.state.tablet];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    const indexTablet = tempTablets.indexOf(this.getTablet(id));
    let removedTablet = tempTablets[indexTablet];
    removedTablet.inCart = false;
    removedTablet.count = 0;
    removedTablet.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          tablet: [...tempTablets],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  removeWatch = (id) => {
    let tempWatches = [...this.state.watch];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    const indexWatch = tempWatches.indexOf(this.getWatch(id));
    let removedWatch = tempWatches[indexWatch];
    removedWatch.inCart = false;
    removedWatch.count = 0;
    removedWatch.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],

          watch: [...tempWatches],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.addTotal();
        this.setPhones();
        this.setTablets();
        this.setWatches();
      }
    );
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
          removePhone: this.removePhone,
          removeTablet: this.removeTablet,
          removeWatch: this.removeWatch,
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
