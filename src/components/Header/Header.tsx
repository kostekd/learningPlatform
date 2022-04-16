import React from "react";
import Burger from "../UI/Burger/Burger";
import classes from './Header.module.css';
import BookLogo from './../../images/bookLogo.svg';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes["header-style"]}>
            <Link to="/" className={classes.link}>
                <div className={classes.logo}>
                    <img src={BookLogo} alt="Logo" />
                    <h1>putLearn</h1>
                </div>
            </Link>
            <Burger />
        </header>
    );
}

export default Header;