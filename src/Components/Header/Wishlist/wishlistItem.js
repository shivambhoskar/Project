import { useDispatch, useSelector } from "react-redux";

import classes from "./wishlistItem.module.css";
import { wishlistActions } from "../../../Store/wishlist-slice";
import { cartActions } from "../../../Store/cart-slice";

const WishlistItem = (props) => {
  const { id, title, image, price, size } = props.product;
  const addInCart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(wishlistActions.removeItemFromWishlist(id));
  };

  const wishlistToCartHandler = () => {
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
        quantity: 1,
      });
    }

    const addItem = {
      items: updateItems,
    };
    dispatch(cartActions.addToCart(addItem));
  };

  return (
    <>
      <div className={classes.wishlistItem}>
        <div className={classes.wishlistImage}>
          <img src={image} alt="product" />
        </div>
        <div className={classes.wishlistDetails}>
          <div className={classes.wishlistTitle}>{title}</div>
          <p className={classes.wishlistPrice}>{price}</p>
          <div className={classes.wishlistSize}>Size: {size}</div>
          <p>Prices include GST</p>
          <p>Extra 5% off on online payments</p>
        </div>
        <div className={classes.wishlistButton}>
          <button onClick={wishlistToCartHandler}>Add TO CART</button>
          <br />
          <button onClick={removeHandler}>REMOVE</button>
        </div>
      </div>
    </>
  );
};

export default WishlistItem;

{
  /* <div className={classes.cartItemDetails}>
  <div className={classes.cartItemTitle}>{title}</div>
  <p className={classes.cartItemPrice}>{price} rs</p>
  <div>Size: {size}</div>
  <p>Prices include GST</p>
  <p>Extra 5% off on online payments</p>
</div>; */
}
