import React from "react";

export default function CartColoms() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <h5 className="text-uppercase">products</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5 className="text-uppercase">name of product</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5 className="text-uppercase">price</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5 className="text-uppercase">quantity</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5 className="text-uppercase">total</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase"></p>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}
