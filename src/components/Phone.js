import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ProductWrapper } from "./ProductWrapper";

export default class Phone extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="phones" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.phone.map((phone) => {
                    return (
                      <ProductWrapper
                        key={phone.id}
                        product={phone}
                        className="col-6 mx-auto col-md-6 col-lg-3 my-3"
                      >
                        <div className="card">
                          <div
                            className="img-container p-5"
                            onClick={() => console.log("clicked on container")}
                          >
                            <Link to="/details">
                              <img
                                src={require(`../img/phone-${phone.id}.png`)}
                                alt="phone"
                                className="card-img-top"
                              />
                            </Link>

                            <button
                              className="cart-btn"
                              disabled={phone.inCart ? true : false}
                              onClick={() => {
                                console.log("added to cart");
                              }}
                            >
                              {phone.inCart ? (
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
                              {phone.title}
                            </p> 
                            <h5 className="text-blue font-italic mb-0">
                              <span className="mt-1"> $</span>
                              {phone.price}
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
