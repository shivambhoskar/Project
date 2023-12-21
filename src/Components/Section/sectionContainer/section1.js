import React from "react";
import { Link } from "react-router-dom";

import classes from "./section1.module.css";

const Section1 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className={classes.section1}>
      <div className={classes.block1}>
        <div>Wear light on your feet, go strong in your life.</div>
      </div>
      <div className={classes.block2}>
        <ul>
          <li>
            <Link to="/forman" onClick={scrollToTop}>
              SHOP MEN
            </Link>
          </li>
          <li>
            <Link to="/forwomen" onClick={scrollToTop}>
              SHOP WOMEN
            </Link>
          </li>
          <li>
            <Link to="/forkids" onClick={scrollToTop}>
              SHOP KIDS
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section1;
