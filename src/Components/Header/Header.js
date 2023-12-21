import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <span className={classes.logo}>
        <h2>icon</h2>
      </span>
      <ul className={classes.navbar}>
        <li className={classes.l1}>
          <Link to="/new&trending">New and Trending</Link>
        </li>
        <li>
          <Link to="/forman">Men</Link>
        </li>
        <li>
          <Link to="/forwomen">Women</Link>
        </li>
        <li>
          <Link to="/forkids">Kids</Link>
        </li>
        <li>
          <Link to="/sports">Sport</Link>
        </li>
        <li>
          <Link to="/collection">Collection</Link>
        </li>
        <li>
          <Link to="/outlets">Outlets</Link>
        </li>
      </ul>
      <div className={classes.sign}>
        <Link to="/wishlists" className={classes.user}>
          <i className="ri-heart-line"></i>
        </Link>
        <Link to="login " className={classes.user}>
          <i className="ri-account-box-line"></i>
        </Link>
        <Link to="cart" className={classes.cart}>
          <i className="ri-shopping-cart-2-line"></i>
        </Link>
        <div className={classes.menu}>
          <div className="bx bx-menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
