import React, { Component } from "react";
import { Footer, FooterSection } from "react-mdl";
import Title from "./Title";
import home from "../img/home.png";
import {BackCss} from './StyledComp/BackCss'

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <BackCss>
          <section id="main">
            <div className="main-text">
              <Title title="electron" />
              <br />
              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                welcome to <Title name="online store" /> where you can find the
                best
              </h4>
              <h2 className="text-blue text-uppercase">electronics</h2>
            </div>
            <img className="home" alt="home" src={home} />
          </section>
        </BackCss>
        <Footer size="mini">
          <FooterSection>
              <div>
                <p style={{ position: "fixed", bottom: "0" }}>
                  Copyright © David Gabrielian 2020
                </p>
              </div>
          </FooterSection>
        </Footer>
      </React.Fragment>
    );
  }
}

