import React, { useState } from "react";
import Modal from "../Modal/Modal";
import BurgerIcon from "./../../../images/burger3.svg";
import classes from "./Burger.module.css";


const Burger = () => {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  const onClickAction = () => {
    setIsBurgerClicked((prevState) => !prevState);
  }
  return (
    <div className={classes["burger-icon"]}>
      <button onClick={onClickAction}>
        <img src={BurgerIcon} alt="Logo" />
      </button>
      {isBurgerClicked && <Modal/>}
    </div>
  );
};

export default Burger;
