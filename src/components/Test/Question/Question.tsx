import React, { useState } from "react";

import classes from './Question.module.css';

interface QuestionProps {
    onApproveClick: Function,
    onCorrectAnswer: Function,
    question: {
        question: String,
        correct: String,
        alternative1: String,
        alternative2: String,
        shuffled: String[]
    }
}


const Question = (props: QuestionProps) => {
    const [checked, setChecked] = useState<string>("");

    const onChangeHandler = (name: string) => {
        setChecked(name);
    }

    const onSubmitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (props.question.shuffled[parseInt(checked) - 1] === props.question.correct) {
            props.onCorrectAnswer();
        }
        props.onApproveClick();
        setChecked("");
    };

    return (
        <div className={classes.content}>
            <form onSubmit={onSubmitFormHandler}>
                <div className={classes.question}>
                    What is english for: <b>{props.question.question}</b>
                </div>
                <div className={classes.radio}>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            checked={checked === '1'}
                            onChange={(e) => onChangeHandler('1')}
                        />
                        {props.question.shuffled[0]}
                    </label>
                </div>
                <div className={classes.radio}>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            onChange={(e) => onChangeHandler('2')}
                            checked={checked === '2'}
                        />
                        {props.question.shuffled[1]}
                    </label>
                </div>
                <div className={classes.radio}>
                    <label>
                        <input
                            type="radio"
                            value="3"
                            onChange={(e) => onChangeHandler('3')}
                            checked={checked === '3'}
                        />
                        {props.question.shuffled[2]}
                    </label>
                </div>
                <div>
                    <button disabled={checked === ''} className={classes['submit-answer']} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Question;