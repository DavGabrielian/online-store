import React, { Component } from 'react'
import Title from "./Title";

export default class Watch extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="py-5">
              <div className="container">
                <Title name="our" title="watches" />
                <div className="row"/>
              </div>
            </div>
          </React.Fragment>
        )
    }
}
