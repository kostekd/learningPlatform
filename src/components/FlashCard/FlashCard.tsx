import React from "react";
import classes from './FlashCard.module.css';

interface FlashCardProps{
    top: String,
    bottom: String
}

const FlashCard = (props : FlashCardProps) => {
    return <div className={classes.flashcard}>
        <h3>{props.top}</h3>
        <h3>{props.bottom}</h3>
    </div>
};

export default FlashCard;