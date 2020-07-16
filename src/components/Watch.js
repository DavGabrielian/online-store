import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ProductWrapper } from "./ProductWrapper";
import PropTypes from "prop-types";

export default class Watch extends Component {
  render() {
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
                        className="col-6 mx-auto col-md-6 col-lg-3 my-3"
                      >
                        <div className="card h-100">
                          <ProductConsumer>
                            {(value) => (
                              <div
                                className="img-container p-5 h-100"
                                onClick={() =>
                                  value.handleWatchDetail(watch.id)
                                }
                              >
                                <Link to="/details">
                                  <img
                                    alt="watch"
                                    className="card-img-top"
                                    src={require(`../img/${watch.name}-${watch.id}.png`)}
                                  />
                                </Link>
                                <button
                                  className="cart-btn"
                                  disabled={watch.inCart ? true : false}
                                  onClick={() => {
                                    value.addWatchToCart(watch.id);
                                    value.openModal(watch.id);
                                  }}
                                >
                                  {watch.inCart ? (
                                    <p
                                      className="text-capitalize mb-0"
                                      disabled
                                    >
                                      in cart
                                    </p>
                                  ) : (
                                    <p
                                      className="text-capitalize mb-0"
                                      disabled
                                    >
                                      add to cart
                                    </p>
                                  )}
                                </button>
                              </div>
                            )}
                          </ProductConsumer>
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

Watch.propTypes = {
  watch: PropTypes.shape({
    idP: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
