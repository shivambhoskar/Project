import React from "react";
import { Link } from "react-router-dom";

import classes from "./section2.module.css";

const Section2 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className={classes.MainS2}>
      <div>
        <p className={classes.heading}>
          <span className={classes.sale}>END OF SEASON SALE </span>
          <br />
          COOLEST STYLES AT HOTTEST PRICES
        </p>
      </div>
      <div className={classes.buy}>
        <Link to="/forman" onClick={scrollToTop}>
          SHOP NOW
        </Link>
      </div>
    </section>
  );
};

export default Section2;
