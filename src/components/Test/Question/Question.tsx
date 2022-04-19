import React, { useState } from "react";

interface QuestionProps {
    onApproveClick: Function,
    question: {
        question: String,
        correct: String,
        alternative1: String,
        alternative2: String,
    }
}


const Question = (props: QuestionProps) => {
    const [checked, setChecked] = useState<string>("");

    const onChangeHandler = (name : string) => {
        setChecked(name);
    }

    const onSubmitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setChecked("");
        props.onApproveClick();
      };

    return (
        <div>
            <form onSubmit={onSubmitFormHandler}>
                <label>Question : <h4>{props.question.question}</h4></label>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Answer1"
                            checked = {checked === 'Answer1'}
                            onChange={(e) => onChangeHandler('Answer1')}
                        />
                        {props.question.correct}
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Answer2"
                            onChange={(e) => onChangeHandler('Answer2')}
                            checked = {checked === 'Answer2'}
                        />
                        {props.question.alternative1}
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Other"
                            onChange={(e) => onChangeHandler('Answer3')}
                            checked = {checked === 'Answer3'}
                        />
                        {props.question.alternative2}
                    </label>
                </div>

                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Question;