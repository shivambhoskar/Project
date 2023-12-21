import { useSelector, useDispatch } from "react-redux";

import classes from "./cart.module.css";
import CartItems from "./cartItem";
import PaymentBox from "../..//Payment/payment";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartEmpty = cartItems == 0;
  let noOfCartItems = cartItems.length;

  return (
    <>
      <div className={classes.cartContainer}>
        {/* <h1 className={classes.cartContainerh1}>CART ITEMS</h1> */}
      </div>
      {cartEmpty ? (
        <div className={classes.emptyCart}>
          <div className={classes.emptyCartLogo}>
            <i className="ri-shopping-cart-line"></i>
          </div>
          <div className={classes.emptyCartDes}>
            Your Shopping Cart is Empty
          </div>
        </div>
      ) : (
        <>
          <div className={classes.noOfCartItems}>
            MY SHOPPING CART ({noOfCartItems})
          </div>
          <div className={classes.cartContainerPaymentBox}>
            <div className={classes.cartContainerItems}>
              {cartItems.map((item) => (
                <CartItems
                  key={item.id}
                  item={{
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    size: item.size,
                    numbersOf: item.quantity,
                  }}
                />
              ))}
            </div>
            <div className={classes.cartPaymentBox}>
              <PaymentBox />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
