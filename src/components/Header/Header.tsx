import React from "react";
import Burger from "../UI/Burger/Burger";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes["header-style"]}>
            <h1>putLearn</h1>
            <Burger/>
        </header>
    );
}

export default Header;