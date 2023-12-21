import { Link } from "react-router-dom";

import classes from "./section03.module.css";

const Section3 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className={classes.section3}>
      <div className={classes.running}>
        <p className={classes.nitro}>NITRO RUNNING SHOES</p>
        <br />
        <p>
          SPEED FOR
          <br /> EVERYDAY RUNNING
        </p>
      </div>
      <Link to="/forman" className={classes.buy} onClick={scrollToTop}>
        SHOP NOW
      </Link>
      <div></div>
    </section>
  );
};

export default Section3;
