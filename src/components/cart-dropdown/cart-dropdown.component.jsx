import React from 'react'

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  )
}

export default CartDropdown
