import React from "react";
import Images from "../../Kids.json";
import classes from "./MenTemplate.module.css";
import ProductTemplate from "./productTemplate";

const WomenTemplate = () => {
  return (
    <section className={classes.section2}>
      <h1>MOST POPULAR RIGHT NOW</h1>
      <ul className={classes.card}>
        {Images &&
          Images.map((product) => (
            <ProductTemplate
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

export default WomenTemplate;
