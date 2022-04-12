import React from "react";
import { BurgerModalProps } from "./BurgerModal";
import classes from "./BurgerModalContent.module.css";

//props the same as for BurgerModal.tsx (BurgerModalProps)

const BurgerModalContent = (props: BurgerModalProps) => {
  return (
    <div className={classes["burger-modal"]}>
      <button onClick={() => props.onClickAction()}>Close this</button>
      <div className={classes['link-buttons']}>
        <button>Add flashcards</button>
        <button>Log In</button>
        <button>About us</button>
      </div>
    </div>
  );
};

export default BurgerModalContent;
