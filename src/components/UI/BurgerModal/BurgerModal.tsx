import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import BurgerModalContent from "./BurgerModalContent";



const BurgerModal = () => {
    const portalDestination : HTMLElement = document.getElementById('burger-overlay') as HTMLElement;

    return(
        <Fragment>
            {ReactDOM.createPortal(<BurgerModalContent/>, portalDestination)}
            {ReactDOM.createPortal(<Backdrop/>, portalDestination)}
        </Fragment>
    );
}

export default BurgerModal;