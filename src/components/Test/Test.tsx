import React, { Fragment, useEffect, useState } from "react";
import { FlashCardStructure } from "../FlashCard/AddFlashCard";
import Questions from "./Questions/Questions";

interface TestProps {
    flashcards: FlashCardStructure[]
}

const TestContent = (props: TestProps) => {
    const [timer, setTimer] = useState(3);
    const [start, setStart] = useState(false);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
            else {
                clearInterval(myInterval);
                setStart(true);
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    }, [timer]);

    return (
        <Fragment>
            {
                !start
                &&
                <div>
                    <h1>Prepare for your test</h1>
                    <label>{timer}...</label>
                </div>
            }
            {
                start
                &&
                <Questions/>
            }
        </Fragment>
    )
}


export default TestContent;