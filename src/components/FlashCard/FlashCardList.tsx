import React from "react";
import { FlashCardStructure } from "../FlashCard/AddFlashCard";
import FlashCard from "./FlashCard";

import classes from './FlashCardList.module.css';

interface FlashCardListProps {
    flashcards: FlashCardStructure[]
}
const FlashCardList = (props: FlashCardListProps) => {
    const flashcardComponents = props.flashcards.map(flashcard => {
        return <FlashCard key={Math.random()} top={flashcard.top} bottom={flashcard.bottom} />
    })

    const renderedList = flashcardComponents.length === 0 ? <p>No flashcards found</p> :flashcardComponents;

    return (
        <div className={classes.content}>
            <div className={classes['list-format']}>
                {renderedList}
            </div>
        </div>
    );
};

export default FlashCardList;