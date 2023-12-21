import React from "react";

const navbarCollection = () => {
  return (
    <Modal onClose={props.slideOff}>
      <div className={classes.menSlider}>
        <ul className={classes.list}>
          <li>Sneakers</li>
          <li>Running</li>
          <li>Walking</li>
          <li>Office Chapal</li>
          <li>Gym</li>
          <li>Slip-ons</li>
        </ul>
        <div className={classes.icon} onClick={props.slideOff}>
          <i class="ri-close-line"></i>
        </div>
      </div>
    </Modal>
  );
};

export default navbarCollection;
