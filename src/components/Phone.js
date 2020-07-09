import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Phone extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props;
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
                        className="col-9 mx-auto col-md-6 col-lg-3 my-3"
                      >
                        <div className="card">
                          <div
                            className="img-container p-5"
                            onClick={()=> console.log('clicked')}
                          >
                            <Link to="/details">
                              <img
                                src={img}
                                alt="phone"
                                className="card-img-top"
                              />
                            </Link>
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

const ProductWrapper = styled.div``;
