import React, { Component } from "react";
import Title from "./Title";
import { storeWatches } from "../Data";
import { ProductConsumer } from "../Context";

export default class Watch extends Component {
  state = {
    watches: storeWatches,
  };
  render() {

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="watches" />
            <div className="row">
              <ProductConsumer>
                {v => {
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
