import React from "react";
import Burger from "../UI/Burger/Burger";
import classes from './Header.module.css';
import BookLogo from './../../images/bookLogo.svg';
import { Link } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";

interface HeaderProps {
    children?:
    | React.ReactChild
    | React.ReactChild[];
}

const Header = (props: HeaderProps) => {
    const isAuth = useSelector((state: RootStateOrAny) => state.auth.isAuthenticated);

    return (
        <header className={classes["header-style"]}>
            <Link to="/" className={classes.link}>
                <div className={classes.logo}>
                    <img src={BookLogo} alt="Logo" />
                    <h1>putLearn</h1>
                </div>
            </Link>
            {isAuth && props.children}
            <Burger />
        </header>
    );
}

export default Header;