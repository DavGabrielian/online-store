import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3"> 404</h1>
            <h1>error</h1>
            <br />
            <h2>poage not found</h2>
            <br />
            <br />
            <br />
            <h3>
              the requested URL
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              is invalid
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
