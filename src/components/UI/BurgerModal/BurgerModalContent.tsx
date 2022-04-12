import React from "react";
import { Link } from "react-router-dom";
import { BurgerModalProps } from "./BurgerModal";

import classes from "./BurgerModalContent.module.css";
import BackArrow from "./../../../images/FullLeftArrow.svg";
//props the same as for BurgerModal.tsx (BurgerModalProps)

const BurgerModalContent = (props: BurgerModalProps) => {
  return (
    <div className={classes["burger-modal"]}>
      <button onClick={() => props.onClickAction()}>
        <img src={BackArrow} alt="Logo" />
      </button>
      <div className={classes["link-buttons"]}>
        <button>
          <Link to="/add">Add flashcards</Link>
        </button>
        <button>
          <Link to="/login">Log In</Link>
        </button>
        <button>About us</button>
      </div>
    </div>
  );
};

export default BurgerModalContent;
