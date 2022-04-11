import React from "react";
import BurgerIcon from "./../../../images/burger3.svg";
import classes from "./Burger.module.css";

const Burger = () => {
  return (
    <div className={classes["burger-icon"]}>
      <button>
        <img src={BurgerIcon} alt="Logo" />
      </button>
    </div>
  );
};

export default Burger;
