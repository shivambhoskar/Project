import { useSelector } from "react-redux";
import classes from "./wishlist.module.css";
import WishlistItem from "./wishlistItem";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const wishlistEmpty = wishlistItems == 0;
  let noOfItems = wishlistItems.length;

  return (
    <>
      <ul>
        {wishlistEmpty ? (
          <div className={classes.wishlistEmpty}>Your Wishlist is Empty</div>
        ) : (
          <>
            <div className={classes.wishlistItems}>
              <div>MY WISHLIST</div>
              <div>{noOfItems} Items</div>
            </div>
            {wishlistItems.map((item) => (
              <WishlistItem
                key={item.id}
                product={{
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  size: item.size,
                }}
              />
            ))}
          </>
        )}
      </ul>
    </>
  );
};

export default Wishlist;

{
  /* <div className={classes.favouriteContainer}>
         <h1 className={classes.h1}>Wishlist page</h1> 
      </div>  */
}
