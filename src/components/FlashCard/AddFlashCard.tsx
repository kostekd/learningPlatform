import React, { useState } from "react";
import Header from "../Header/Header";
import FlashCardForm from "../Form/FlashCardForm";
import FlashCardList from "./FlashCardList";
import classes from "./AddFlashCard.module.css";

export interface FlashCardStructure {
  top: String;
  bottom: String;
}

const url = "https://mywebsite-5ab91-default-rtdb.europe-west1.firebasedatabase.app/flashcards.json";


const AddFlashCard = () => {
  const [currentFlashCard, setCurrentFlashCard] =
    useState<FlashCardStructure[]>([]);

  const addElementHandler = (flashcard: FlashCardStructure) => {
    setCurrentFlashCard((prevState) => [...prevState, flashcard]);
  };

  const fetchFlashCardHandler = async () => {
    try{
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      console.log(data);

      const loadedFlashcards : FlashCardStructure[] = [];

      for(const key in data){
        for(const index in data[key]){
          loadedFlashcards.push(data[key][index]);
        }
      }

      setCurrentFlashCard(loadedFlashcards);
    }
    catch(error){
      alert(error);
    }
  }

  const addFlashCardHandler = async (flashcards : FlashCardStructure[]) => {

    try{
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(flashcards),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    }

    catch(error){
      alert(error);
    }
  }

  return (
    <div>
      <Header />
      <main className={classes.content}>
        <FlashCardForm onSubmitHandler={addElementHandler} />
        <div className={classes["flashcard-list"]}>
          <FlashCardList flashcards={currentFlashCard} />
        </div>
      </main>
      <button onClick={()=> fetchFlashCardHandler()}>GET existing cards!</button>
      <button onClick={()=> addFlashCardHandler(currentFlashCard)}>Synchronize</button>
    </div>
  );
}

export default AddFlashCard;
