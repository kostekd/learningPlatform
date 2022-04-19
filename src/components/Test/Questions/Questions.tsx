import React, { Fragment, useState } from "react";
import { FlashCardStructure } from "../../FlashCard/AddFlashCard";
import Question from "../Question/Question";

interface QuestionProps {
    flashcards: FlashCardStructure[]
}

const Questions = (props: QuestionProps) => {
    const [index, setIndex] = useState(0);
    const [points, setPoints] = useState(0);

    const onIndexIncreaseHandler = () => {
        setIndex(index + 1);
    }

    const onCorrectAnswerHandler = () => {
        setPoints(points + 1);
    }

    const questionIndexes = Array.from({ length: 10 }, () => Math.floor(Math.random() * props.flashcards.length));
    const questions = questionIndexes.map(element => {
        const alternativeIndex1 = Math.floor(Math.random() * props.flashcards.length);
        const alternativeIndex2 = Math.floor(Math.random() * props.flashcards.length);
        return {
            question: props.flashcards[element].bottom,
            correct: props.flashcards[element].top,
            alternative1: props.flashcards[alternativeIndex1].top,
            alternative2: props.flashcards[alternativeIndex2].top,
        }
    });

    const finished = index < 10 ? false : true;
    return (
        <Fragment>
            {!finished
                &&
                <div>
                    <h1>There will be questions soon...</h1>
                    <Question onApproveClick={onIndexIncreaseHandler} onCorrectAnswer={onCorrectAnswerHandler} question={questions[index]} />
                </div>
            }
            {
                finished
                &&
                <p>{points}</p>
            }
        </Fragment>
    );
}

export default Questions;