import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ProductWrapper } from "./ProductWrapper";
import PropTypes from "prop-types";

export default class Phone extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="phones" />
            <div className="row">
              <ProductConsumer  {...this.props}>
                {(value) => {
                  return value.phone.map((phone) => {
                    return (
                      <ProductWrapper
                        key={phone.id}
                        product={phone}
                        className="col-6 mx-auto col-md-6 col-lg-3 my-3"
                      >
                        <div className="card">
                          <ProductConsumer>
                            {(value) => (
                              <div
                                className="img-container p-5"
                                onClick={() =>
                                  value.handlePhoneDetail(phone.id)
                                }
                              >
                                <Link to="/details">
                                  <img
                                    src={require(`../img/${phone.name}-${phone.id}.png`)}
                                    alt="phone"
                                    className="card-img-top"
                                  />
                                </Link>

                                <button
                                  className="cart-btn"
                                  disabled={phone.inCart ? true : false}
                                  onClick={() => {
                                    value.addToCart(phone.id);
                                  }
                                }
                                >
                                  {phone.inCart ? (
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
                                    </p>                                  )}
                                </button>
                              </div> 
                            )}
                          </ProductConsumer>

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

Phone.propTypes = {
  phone: PropTypes.shape({
    idP: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
