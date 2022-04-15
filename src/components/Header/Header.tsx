import React from "react";
import Burger from "../UI/Burger/Burger";
import classes from './Header.module.css';
import BookLogo from './../../images/bookLogo.svg';

const Header = () => {
    return (
        <header className={classes["header-style"]}>
            <div className={classes.logo}>
                <img src={BookLogo} alt="Logo" />
                <h1>putLearn</h1>
            </div>
            <Burger />
        </header>
    );
}

export default Header;