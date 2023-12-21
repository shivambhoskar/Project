import { useSelector } from "react-redux";
import classes from "./payment.module.css";

const PaymentBox = () => {
  const updatedItems = useSelector((state) => state.cart.items);

  let price = 0;
  price = updatedItems.map((item) => item.price);

  let Sum = 0;

  let quantity = updatedItems.map((item) => item.quantity);

  let subtotalAmount;
  quantity.forEach((item) => {
    subtotalAmount = parseInt(price) * parseInt(item);
    Sum += subtotalAmount;
  });

  console.log(subtotalAmount);

  const subtotal = Sum;

  const shippingCost = 50;

  const totalCost = Sum + shippingCost;

  return (
    <>
      <div className={classes.paymentBox}>
        <div className={classes.paymentBoxDetail}>
          <div>
            <div>SUBTOTAL</div>
            <div>SHIPPING COSTS</div>
          </div>
          <div className={classes.paymentBoxAmount}>
            <div>{subtotal}</div>
            <div>{shippingCost}</div>
          </div>
        </div>
        <hr />
        <div className={classes.paymentBoxTotal}>
          <div className={classes.paymentBoxTotalTitle}>
            Total
            <small style={{ fontSize: "15px", marginLeft: "5px" }}>
              PRICE INCLUDE GST
            </small>
          </div>
          <div className={classes.paymentBoxTotalAmount}> {totalCost}</div>
        </div>
        <button className={classes.paymentBoxButton}>PAY</button>
      </div>
    </>
  );
};

export default PaymentBox;
