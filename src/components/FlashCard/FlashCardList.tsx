import React, { Fragment } from "react";
import { FlashCardStructure } from "../FlashCard/AddFlashCard";
import FlashCard from "./FlashCard";

interface FlashCardListProps{
    flashcards : FlashCardStructure[]
}
const FlashCardList = (props : FlashCardListProps) =>{
    const flashcardComponents = props.flashcards.map(flashcard =>{
        return <FlashCard top={flashcard.top} bottom={flashcard.bottom}/>
    })

    return (
        <Fragment>
            {flashcardComponents}
        </Fragment>
    );
};

export default FlashCardList;