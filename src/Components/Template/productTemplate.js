import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";

import { productActions } from "../../Store/product-slice";
import classes from "./productTemplate.module.css";

const ProductTemplate = (props) => {
  const { image, title, price, id } = props;
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
    <li className={classes.block3} key={id}>
      <div onClick={scrollToTop}>
        <Link to="/product" onClick={showProductHandler}>
          <img src={image} alt="product" />
        </Link>
        <h3>{title}</h3>
        <h2>{price}</h2>
        <Link to="/product" onClick={showProductHandler}>
          BUY NOW
        </Link>
      </div>
    </li>
  );
};

export default ProductTemplate;
