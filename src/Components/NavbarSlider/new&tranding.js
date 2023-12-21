import React from "react";
import Images from "../../new&TrendingImages.json";
import classes from "../../Components/Template/MenTemplate.module.css";
import MenProductItems from "../Template/productTemplate";

const NewandTrending = () => {
  console.log(Images);
  return (
    <section className={classes.section2}>
      <h1>MOST POPULAR RIGHT NOW</h1>
      <ul className={classes.card}>
        {Images &&
          Images.map((product) => (
            <MenProductItems
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
      </ul>
    </section>
  );
};

export default NewandTrending;
