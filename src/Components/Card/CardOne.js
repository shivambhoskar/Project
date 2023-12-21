import React from "react";
import { Link } from "react-router-dom";

import classes from "./CardOne.module.css";
import Images from "../../imagesOne.json";

const Card = () => {
  return (
    <section className={classes.section2}>
      <h1>MOST POPULAR RIGHT NOW</h1>
      <div className={classes.card}>
        {Images &&
          Images.map((images) => {
            return (
              <Link to="/product" className={classes.block3} key={images.id}>
                <div>
                  <img src={images.image} alt="product" />
                </div>
                <div>
                  <h3>{images.title}</h3>
                  <div>See more</div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default Card;
{
  /* <Link to="/product">See more</Link>; */
}
