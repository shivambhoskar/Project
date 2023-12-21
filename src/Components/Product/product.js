import { useSelector } from "react-redux";

import classes from "./product.module.css";
import ProductItem from "./ProductItem";

const Product = () => {
  const product = useSelector((state) => state.product.items);
  return (
    <div className={classes.product}>
      <h1 className={classes.h1}>Product Page</h1>
      {product.map((product) => (
        <ProductItem
          key={product.id}
          product={{
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
          }}
        />
      ))}
    </div>
  );
};

export default Product;
