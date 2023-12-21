import Wishlist from "../Components/Header/Wishlist/wishlist";

function FavouritePage() {
  return (
    <>
      <div>
        <h1
          style={{
            color: "orangered",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          Favourite
        </h1>
        <Wishlist />
      </div>
    </>
  );
}

export default FavouritePage;
