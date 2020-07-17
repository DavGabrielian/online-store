import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./StyledComp/Button";
import logo from "../logo.svg";
import {NavWrap} from './StyledComp/NavWrap'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrap className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/phones" className="nav-link">
              PHONES
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/tablets" className="nav-link">
              TABLETS
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/watches" className="nav-link">
              WATCHES
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            MY CART
          </ButtonContainer>
        </Link>
      </NavWrap>
    );
  }
}


