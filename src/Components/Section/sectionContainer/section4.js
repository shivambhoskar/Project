import React from "react";
import { Link } from "react-router-dom";

import classes from "./section4.module.css";

const Section4 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className={classes.section4}>
      <div>
        <div className={classes.s4heading}>
          <p>NEW</p>
          <p>ARRIVAL</p>
        </div>
        <div className={classes.s4subhead}>
          <p>SPECIAL PRICE UP TO 30% OFF</p>
          <p></p>
        </div>
        <div className={classes.buy} onClick={scrollToTop}>
          <Link to="/forman">SHOP NOW</Link>
        </div>
      </div>
    </section>
  );
};

export default Section4;
