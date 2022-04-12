import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import BurgerModal from "../BurgerModal/BurgerModal";


const Modal = () => {
    const portalDestination : HTMLElement = document.getElementById('burger-overlay') as HTMLElement;

    return(
        <Fragment>
            {ReactDOM.createPortal(<BurgerModal/>, portalDestination)}
            {ReactDOM.createPortal(<Backdrop/>, portalDestination)}
        </Fragment>
    );
}

export default Modal;