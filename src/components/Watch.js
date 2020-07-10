import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ProductWrapper } from "./ProductWrapper";

export default class Watch extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props;

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="watches" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.watch.map((watch) => {
                    return (
                      <ProductWrapper
                        key={watch.id}
                        product={watch}
                        className="col-9 mx-auto col-md-6 col-lg-3 my-3"
                      >
                        <div className="card">
                          <div
                            className="img-container p-5"
                            onClick={() => console.log("clicked")}
                          >
                            <Link to="/details">
                              <img
                                alt="watch"
                                className="card-img-top"
                                src={require(`../img/watch-${watch.id}.png`)}
                              />
                            </Link>
                            <button
                              className="cart-btn"
                              disabled={inCart ? true : false}
                              onClick={() => {
                                console.log("added");
                              }}
                            >
                              {inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                  in cart
                                </p>
                              ) : (
                                <i className="fas fa-cart-plus" />
                              )}
                            </button>
                          </div>
                          {/*  footer */}
                          <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-ceter mb-0">
                              {watch.title}
                            </p>
                            <h5 className="text-blue font-italic mb-0">
                              <span className="mt-1"> $</span>
                              {watch.price}
                            </h5>
                          </div>
                        </div>
                      </ProductWrapper>
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
