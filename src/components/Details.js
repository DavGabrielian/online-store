import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }
  handleBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img
                    src={require(`../img/phone-${id}.png`)}
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : {company}
                  </h4>
                  <h4 className="text-blue text-uppercase">
                    <strong>price : ${price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold my-3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <ButtonContainer
                      style={{
                        borderColor: "var(--mainRed)",
                        background: "var(--mainRed)",
                        color: "var(--mainWhite)",
                      }}
                      onClick={this.handleBack}
                    >
                      previous page
                    </ButtonContainer>
                    <ButtonContainer
                      cart
                      style={{
                        borderColor: "var(--mainGreen)",
                        background: "var(--mainGreen)",
                        color: "var(--mainWhite)",
                      }}
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
