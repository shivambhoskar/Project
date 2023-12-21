import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function RootLayout() {
  const [showMensNavbar, setshowMensNavbar] = useState(false);

  const showMensHandler = () => setshowMensNavbar(true);
  const hideMensHandler = () => setshowMensNavbar(false);

  return (
    <>
      {/* {showMensNavbar && <MenSlider slideOff={hideMensHandler} />} */}
      <Header slideOn={showMensHandler} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
