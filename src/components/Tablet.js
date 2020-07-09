import React, { Component } from "react";
import Title from "./Title";
import { storeTablets } from "../Data";
import { ProductConsumer } from "../Context";

export default class Tablets extends Component {
  state = {
    tablets: storeTablets,
  };
  render() {

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="tablets" />
            <div className="row">
              <ProductConsumer>
                {(v) => {
                  return <h1>{v}</h1>;
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
