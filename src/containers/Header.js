import React, { useState } from "react";
import Logo from "../components/Logo";
import Nav from "./Nav";
import "../styles/Header.scss";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartToolTip from "./CartToolTip";
import { REMOVE_FROM_CART } from "../store/actions";

const Header = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <Logo name="My React App" />
      </div>
      <div className="navContainer">
        <Nav />
      </div>
      <div className="cartContainer">
        <div className="tooltipContainer">
          <FontAwesomeIcon onMouseEnter={() =>setShowModal(true)} icon={faShoppingCart} ></FontAwesomeIcon>
          {showModal ? <CartToolTip removeFunction={props.onRemoveProduct} closeFunction={() =>setShowModal(false)} cart={props.cart}></CartToolTip>: ""}
        </div>
        {props.cart.length}
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveProduct: (product) => dispatch({type:REMOVE_FROM_CART, product: product})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
