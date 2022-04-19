import React, { Fragment, useEffect, useState } from "react";

import classes from './Test.module.css';
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
            <div className={classes.content}>
                {
                    !start
                    &&

                    <><h1>Prepare for your test</h1><h3>{timer}</h3></>

                }
                {
                    start
                    &&
                    <Questions flashcards={props.flashcards} />
                }
            </div>
        </Fragment>
    )
}


export default TestContent;