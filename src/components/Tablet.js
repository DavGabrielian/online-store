import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ProductWrapper } from "./ProductWrapper";

export default class Tablets extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="tablets" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.tablet.map((tablet) => {
                    return (
                      <ProductWrapper
                        key={tablet.id}
                        product={tablet}
                        className="col-6 mx-auto col-md-6 col-lg-3 my-3"
                      >
                        <div className="card h-100">
                          <div
                            className="img-container p-5 h-100"
                            onClick={() => console.log("clicked")}
                          >
                            <Link to="/details">
                              <img
                                alt="tablet"
                                className="card-img-top"
                                src={require(`../img/tablet-${tablet.id}.png`)}
                              />
                            </Link>
                            <button
                              className="cart-btn"
                              disabled={tablet.inCart ? true : false}
                              onClick={() => {
                                console.log("added");
                              }}
                            >
                              {tablet.inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                  in cart
                                </p>
                              ) : (
                                <i className="fas fa-cart-plus" />
                              )}
                            </button>
                          </div>
                          {/*  footer */}
                          <div className="card-footer d-flex justify-content-between ">
                            <p className="align-self-ceter mb-0">
                              {tablet.title}
                            </p>
                            <h5 className="text-blue font-italic mb-0">
                              <span className="mt-1"> $</span>
                              {tablet.price}
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
