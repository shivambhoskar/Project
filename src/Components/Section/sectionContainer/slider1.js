import React from "react";

import classes from "./slider1.module.css";
import Images from "../../../imagesOne.json";
import SliderProduct from "./sliderProduct";

const Slider = () => {
  return (
    <section className={classes.section2}>
      <h1>MOST POPULAR RIGHT NOW</h1>
      <ul className={classes.card}>
        {Images &&
          Images.map((product) => (
            <SliderProduct
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          ))}
      </ul>
    </section>
  );
};

export default Slider;

{
  /* <div className={classes.card} key={id}>
{Images &&
  Images.map((images) => {
    return (
      <Link
        to="/product"
        className={classes.block3}
        key={images.id}
        onClick={showProductHandler}
      >
        <div>
          <img src={images.image} alt="product" />
        </div>
        <div>
          <h3>{images.title}</h3>
          <div onClick={showProductHandler}>See more</div>
        </div>
      </Link>
    );
  })}
</div> */
}
