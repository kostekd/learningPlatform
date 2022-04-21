import React, { Fragment, useEffect, useState } from "react";
import { FlashCardStructure } from "../../components/FlashCard/AddFlashCard";

import classes from './TestPage.module.css';
import Header from "../../components/Header/Header";
import Test from "../../components/Test/Test";
import TestIntroduction from "../../components/Test/TestIntroduction";

const url = "https://mywebsite-5ab91-default-rtdb.europe-west1.firebasedatabase.app/flashcards.json";

const TestPage = () => {
    const [start, setStart] = useState(false);
    const [flashcards, setFlashcards] = useState<FlashCardStructure[]>([]);

    const onStartHandler = () => {
        setStart(true);
    }

    const addFlashCardHandler = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            const arrayFlashcard: FlashCardStructure[] = []

            for (const key in data) {
                arrayFlashcard.push(data[key]);
            }
            setFlashcards(arrayFlashcard);
        }

        catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        addFlashCardHandler();
    }, [start]);
    return (
        <Fragment>
            <Header />
            <div className={classes.content}>
                {
                    !start
                    &&
                    <TestIntroduction onStart={onStartHandler} />
                }
                {
                    start
                    &&
                    <Test flashcards={flashcards} />
                }
            </div>
        </Fragment>
    )
}

export default TestPage;