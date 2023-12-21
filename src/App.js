import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from "react";
import Root from "./Pages/Root";
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import WishlistPage from "./Pages/WishlistPage";
import HomePage from "./Pages/HomePage";
import ForMan from "./Pages/TypesofPage/ForMen";
import ProductPage from "./Pages/TypesofPage/ProductPage";
import ForWomen from "./Pages/TypesofPage/ForWomen";
import ForKids from "./Pages/TypesofPage/ForKids";
import NewandTrending from "./Pages/TypesofPage/New&trending";
import Sport from "./Pages/TypesofPage/ForSport";
import Collection from "./Pages/TypesofPage/Collection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: "/", element: <HomePage /> },
      { path: "/wishlists", element: <WishlistPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/forman", element: <ForMan /> },
      { path: "/forwomen", element: <ForWomen /> },
      { path: "/product", element: <ProductPage /> },
      { path: "forkids", element: <ForKids /> },
      { path: "/new&trending", element: <NewandTrending /> },
      { path: "/sports", element: <Sport /> },
      { path: "/collection", element: <Collection /> },
      { path: "/outlets", element: <ForKids /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
