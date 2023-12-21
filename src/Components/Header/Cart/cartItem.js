import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import classes from "./cartItem.module.css";
import { cartActions } from "../../../Store/cart-slice";
// import PaymentBox from "../../Payment/payment";

const CartItems = (props) => {
  const { id, title, price, image, size, numbersOf } = props.item;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const removeItemFormCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addQuantity = (event) => {
    let selectedQuantity;
    selectedQuantity = event.target.value;
    setQuantity(selectedQuantity);

    dispatch(cartActions.addQuantity(quantity));
  };

  return (
    <>
      <div className={classes.cartItem}>
        <div className={classes.cartItems}>
          <div className={classes.cartItemImage}>
            <img src={image} alt="product" />
          </div>
          <div className={classes.cartItemDetails}>
            <div className={classes.cartItemTitle}>{title}</div>
            <p className={classes.cartItemPrice}>{price} rs</p>
            <div>Size: {size}</div>
            <p>Prices include GST</p>
            <p>Extra 5% off on online payments</p>
          </div>
          <div>
            <select
              name="quantity"
              className={classes.cartItemQuantity}
              id="quantity"
              onChange={addQuantity}
            >
              <option disabled>Qty</option>
              <option value={numbersOf}>{numbersOf}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className={classes.cartItemButton}>
            <div onClick={removeItemFormCartHandler}>
              <i className="ri-delete-bin-6-line"></i>
            </div>
          </div>
        </div>
        {/* <div className={classes.paymentbox}>
          <PaymentBox />
        </div> */}
      </div>
    </>
  );
};

export default CartItems;
