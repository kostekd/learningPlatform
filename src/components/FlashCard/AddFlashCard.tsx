import React, { useState } from "react";
import Header from "../Header/Header";
import FlashCardForm from "../Form/FlashCardForm";
import FlashCardList from "./FlashCardList";
import classes from "./AddFlashCard.module.css";

export interface FlashCardStructure {
  top: String;
  bottom: String;
}

const DUMMY_VALUES: FlashCardStructure[] = [
  { top: "car", bottom: "samochód" },
  { top: "cat", bottom: "kot" },
  { top: "dog", bottom: "pies" },
  { top: "pen", bottom: "długopis" },
  { top: "value", bottom: "wartość" },
  { top: "face", bottom: "twarz" },
  { top: "leg", bottom: "noga" },
  { top: "keyboard", bottom: "klawiatura" },
  { top: "screen", bottom: "ekran" },
  { top: "actor", bottom: "aktor" },
];

function App() {
  const [currentFlashCard, setCurrentFlashCard] =
    useState<FlashCardStructure[]>(DUMMY_VALUES);

  const addElementHandler = (flashcard: FlashCardStructure) => {
    setCurrentFlashCard((prevState) => [...prevState, flashcard]);
  };
  return (
    <div>
      <Header />
      <main className={classes.content}>
        <FlashCardForm onSubmitHandler={addElementHandler} />
        <div className={classes["flashcard-list"]}>
          <FlashCardList flashcards={currentFlashCard} />
        </div>
        <div>Essa</div>
      </main>
    </div>
  );
}

export default App;
