import React from "react";

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
    return (
        <div>
            <h3>{props.question.question}</h3>
            <div>{props.question.correct}</div>
            <div>{props.question.alternative1}</div>
            <div>{props.question.alternative2}</div>
            <button onClick={() => props.onApproveClick()}>Confirm</button>
        </div>
    )
}

export default Question;