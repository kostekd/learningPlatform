import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import BurgerModalContent from "./BurgerModalContent";

export interface BurgerModalProps{
    onClickAction : Function
}

const BurgerModal = (props : BurgerModalProps) => {
    const portalDestination : HTMLElement = document.getElementById('burger-overlay') as HTMLElement;

    return(
        <Fragment>
            {ReactDOM.createPortal(<BurgerModalContent onClickAction={props.onClickAction}/>, portalDestination)}
            {ReactDOM.createPortal(<Backdrop/>, portalDestination)}
        </Fragment>
    );
}

export default BurgerModal;