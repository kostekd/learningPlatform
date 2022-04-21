import React from "react";
import { Link, useHistory } from "react-router-dom";
import { BurgerModalProps } from "./BurgerModal";

import classes from "./BurgerModalContent.module.css";
import BackArrow from "./../../../images/FullLeftArrow.svg";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/authentication";
import { APP_PAGE } from "../../../App";

//props the same as for BurgerModal.tsx (BurgerModalProps)

const BurgerModalContent = (props: BurgerModalProps) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootStateOrAny) => state.auth.isAuthenticated);
  const history = useHistory();

  const onClickLogoutHandler = () => {
    dispatch(authActions.logout());
    props.onClickAction();
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className={classes["burger-modal"]}>

      <button onClick={() => props.onClickAction()}>
        <img src={BackArrow} alt="Logo" />
      </button>

      <div className={classes["link-buttons"]}>
        <button>
          <Link to={APP_PAGE.EXPLORE} className={classes.link}>Explore flashcards</Link>
        </button>

        <button>
          <Link to={APP_PAGE.ADD} className={classes.link}>Add flashcards</Link>
        </button>

        {!isAuth &&
          <button>
            <Link to={APP_PAGE.SIGN_IN} className={classes.link}>Sign Up</Link>
          </button>
        }
        {!isAuth &&
          <button>
            <Link to={APP_PAGE.LOG_IN} className={classes.link}>Log In</Link>
          </button>
        }

        {isAuth && <button onClick={onClickLogoutHandler} style={{ color: 'red' }}>
          Log out
        </button>}

      </div>
    </div >
  );
};

export default BurgerModalContent;
