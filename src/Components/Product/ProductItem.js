import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import classes from "./productItem.module.css";
import { wishlistActions } from "../../Store/wishlist-slice";
import { cartActions } from "../../Store/cart-slice";

const ProductItem = (props) => {
  const addToWishlist = useSelector((state) => state.wishlist);
  const addInCart = useSelector((state) => state.cart);
  const { id, title, image, price } = props.product;
  const dispatch = useDispatch();

  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);

  const addToWishlistHandler = () => {
    const updatedItems = addToWishlist.items.slice();
    const existingItem = updatedItems.find((item) => item.id === id);

    if (existingItem) {
      return;
    } else {
      updatedItems.push({
        id: id,
        price: price,
        image: image,
        title: title,
        size: size,
        // quantity: quantity,
      });
    }

    const addItem = {
      items: updatedItems,
    };
    dispatch(wishlistActions.addToWishlist(addItem));
  };

  const addTOCartHandler = () => {
    const updateItems = addInCart.items.slice();
    const existingItem = updateItems.find((item) => item.id === id);

    if (existingItem) {
      return;
    } else {
      updateItems.push({
        id: id,
        price: price,
        image: image,
        title: title,
        size: size,
        quantity: quantity,
      });
    }

    const addItem = {
      items: updateItems,
    };
    dispatch(cartActions.addToCart(addItem));
  };
  var ele = document.getElementsByName("radio");

  let displayRadioValue = () => {
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) setSize(ele[i].value);
    }
  };

  const quantityData = (event) => {
    let selectedQuantity = event.target.value;
    setQuantity(selectedQuantity);
  };

  return (
    <>
      <div className={classes.productItem} key={id}>
        <div className={classes.productImage}>
          <img src={image} alt="product" />
        </div>
        <div className={classes.productDetails}>
          <div className={classes.productTitle}>{title}</div>
          <p className={classes.productPrice}>{price}rs</p>
          <p>Prices include GST</p>
          <p>Extra 5% off on online payments</p>
          <div className={classes.sizeQuantity}>
            <div onClick={displayRadioValue}>
              <label className={classes.container}>
                <input type="radio" name="radio" value="6" />
                <span className={classes.checkmark}>6</span>
              </label>
              <label className={classes.container}>
                <input type="radio" name="radio" value="7" />
                <span className={classes.checkmark}>7</span>
              </label>
              <label className={classes.container}>
                <input type="radio" name="radio" value="8" />
                <span className={classes.checkmark}>8</span>
              </label>
              <label className={classes.container}>
                <input type="radio" name="radio" value="9" />
                <span className={classes.checkmark}>9</span>
              </label>
              <label className={classes.container}>
                <input type="radio" name="radio" value="10" />
                <span className={classes.checkmark}>10</span>
              </label>
            </div>
            <div>
              <select
                name="quantity"
                className={classes.cartItemQuantity}
                id="quantity"
                onChange={quantityData}
              >
                <option disabled>Qty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <div id="result" style={{ color: "red" }}></div>
          </div>
          <div className={classes.productButton}>
            <button onClick={addTOCartHandler}>Add TO CART</button>
            <br />
            <button onClick={addToWishlistHandler}>ADD TO WISHLIST</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
