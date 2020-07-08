import React, { Component } from 'react'
import Title from "./Title";

export default class Phone extends Component {
    state={
        phones:[]
    }
    render() {
        return (
            <React.Fragment>
            <div className="py-5">
              <div className="container">
                <Title name="our" title="phones"  />
                <div className="row"/>
              </div>
            </div>
          </React.Fragment>
        )
    }
}
