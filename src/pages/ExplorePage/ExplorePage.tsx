import React, { Fragment, useEffect, useState } from "react";

import classes from './ExplorePage.module.css';
import Header from "../../components/Header/Header";
import { FlashCardStructure } from "../../components/FlashCard/AddFlashCard";
import FlashCardList from "../../components/FlashCard/FlashCardList";

const url = "https://mywebsite-5ab91-default-rtdb.europe-west1.firebasedatabase.app/flashcards.json";

const ExplorePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [flashcards, setFlashcards] = useState<FlashCardStructure[]>([]);

    const addFlashCardHandler = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            const arrayFlashcard: FlashCardStructure[] = []

            for (const key in data) {
                arrayFlashcard.push(data[key]);
            }

            setFlashcards(arrayFlashcard);
            setIsLoading(false);
        }

        catch (error) {
            alert(error);
        }
    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value);

    }

    const filteredFlashCards = flashcards.filter(element => {
        return element.top.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    const renderedElement = isLoading ?
        <p className={classes.loading}>Loading...</p>
        : <FlashCardList flashcards={filteredFlashCards} />;

    useEffect(() => {
        addFlashCardHandler();
    }, []);

    return (
        <Fragment>
            <Header />
            <main className={classes.content}>
                <input
                    type="search"
                    id="site-search"
                    placeholder="Search for flashcards..."
                    onChange={onChangeHandler} value={searchTerm}
                />
                <div className={classes.flashcards}>
                    {renderedElement}
                </div>
            </main>
        </Fragment>
    );
}


export default ExplorePage;