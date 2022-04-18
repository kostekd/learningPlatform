import React from "react";

import classes from './TestIntroduction.module.css';

interface TestIntroductionProps{
    onStart : Function
}

const TestIntroduction = (props : TestIntroductionProps) => {
    return(
        <main className={classes.content}>
        <h1>Test your knowledge in a short quiz</h1>
        <p>
            Quiz contains 10 random questions from our database that will check your
            vocabulary and help you develop your foreign language skills.
        </p>
        <p>
            Are you ready to take on a challenge?
        </p>
        <button onClick={() => props.onStart()}>Start the quiz</button>
    </main>
    );
}

export default TestIntroduction;