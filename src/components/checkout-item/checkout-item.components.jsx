import React from "react";
import { connect } from "react-redux";
import "./checkout-items.styles.scss";

import {
  removeItem,
  clearItemFromCart,
  addItem
} from "../../redux/cart/cart.actions";

function CheckoutItem({ cartItem, dispatch }) {
  const { imageUrl, name, price, quantity, id } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(id))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(id))}
      >
        &#10005;
      </div>
    </div>
  );
}

export default connect()(CheckoutItem);
