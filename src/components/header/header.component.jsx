import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";

import "./header.styles.scss";
import { auth } from "firebase";

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          shop
        </Link>
        <Link className="option" to="/contact">
          contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}></div>
        ) : (
          <Link to="/signin" className="option">sign in</Link>
        )}
      </div>
    </div>
  );
}
