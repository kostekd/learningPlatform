import React from "react";
import { Link } from "react-router-dom";
import { BurgerModalProps } from "./BurgerModal";

import classes from "./BurgerModalContent.module.css";
import BackArrow from "./../../../images/FullLeftArrow.svg";
import { RootStateOrAny, useSelector } from "react-redux";

//props the same as for BurgerModal.tsx (BurgerModalProps)

const BurgerModalContent = (props: BurgerModalProps) => {
  const isAuth = useSelector((state: RootStateOrAny) => state.auth.isAuthenticated);

  return (
    <div className={classes["burger-modal"]}>
      <button onClick={() => props.onClickAction()}>
        <img src={BackArrow} alt="Logo" />
      </button>
      <div className={classes["link-buttons"]}>
        <button>
          <Link to="/explore" className={classes.link}>Explore flashcards</Link>
        </button>
        <button>
          <Link to="/add" className={classes.link}>Add flashcards</Link>
        </button>
        {!isAuth &&
          <button>
            <Link to="/login" className={classes.link}>Sign Up</Link>
          </button>
        }
        <button>About us</button>
      </div>
    </div>
  );
};

export default BurgerModalContent;
