import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";
import Title from "./Title";
import styled from "styled-components";
import home from "../img/home.png";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <HomePageCss>
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
        </HomePageCss>
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

export const HomePageCss = styled.section`
  #main {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 0fr 2fr;
  }

  #main .main-text {
    margin: 60px 150px;
    font-weight: 700;
    line-height: 1.5;
  }

  #main .home {
    left: 45rem;
    position: fixed;
  }
`;
