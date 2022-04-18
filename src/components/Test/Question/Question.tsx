import React from "react";

interface QuestionProps {
    onApproveClick : Function,
    question : {
        question : String,
        correct : String,
        alternative1: String,
        alternative2: String,
    }
}


const Question = (props : QuestionProps) => {
    return(
        <div>
            
        </div>
    )
}

export default Question;