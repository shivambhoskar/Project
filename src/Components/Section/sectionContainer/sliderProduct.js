import React from "react";
import classes from "./sliderProduct.module.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../../../Store/product-slice";

const SliderProduct = (props) => {
  const { image, title, price, id } = props;
  // console.log(props);
  const dispatch = useDispatch();

  const showProductHandler = () => {
    const updateProduct = [];

    updateProduct.push({
      id: id,
      price: price,
      image: image,
      title: title,
    });

    const showItem = {
      items: updateProduct,
    };

    dispatch(productActions.showProduct(showItem));
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <li className={classes.block3} onClick={scrollToTop}>
      <Link to="/product" key={id} onClick={showProductHandler}>
        <div>
          <img src={image} alt="product" />
        </div>
        <div>
          <h3>{title}</h3>
          <div onClick={showProductHandler}>See more</div>
        </div>
      </Link>
    </li>
  );
};

export default SliderProduct;
