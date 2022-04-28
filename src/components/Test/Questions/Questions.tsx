import React, { useState } from "react";

import classes from './Question.module.css';
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

    function shuffle(array: String[]) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
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
            shuffled: shuffle([props.flashcards[element].top, props.flashcards[alternativeIndex1].top, props.flashcards[alternativeIndex2].top])
        }
    });

    const messageIfDidPoorly = "Not the best but there is still room to improve";
    const messageIfDidModerately = "You are not a beginner but there is still more room to improve";
    const messageIfDidGood = "Thats a way to go. I can see you are an expert!";

    const finished = index < 10 ? false : true;
    return (
        <div className={classes.content}>
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
                <div>
                    <h2>Congratulations!</h2>
                    You scored {points} out of 10 possible!
                    <br/>
                    {points < 4 && messageIfDidPoorly}
                    {points >= 4 && points < 8 && messageIfDidModerately}
                    {points >= 8 && messageIfDidGood}
                </div>
            }
        </div>
    );
}

export default Questions;