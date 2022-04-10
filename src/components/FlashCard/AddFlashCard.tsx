import React, { useState } from "react";
import Header from "../Header/Header";
import FlashCardForm from "../Form/FlashCardForm";
import FlashCardList from "./FlashCardList";
import classes from './AddFlashCard.module.css';

export interface FlashCardStructure {
  top: String;
  bottom: String;
}

function App() {
  const [currentFlashCard, setCurrentFlashCard] = useState<FlashCardStructure[]>([]);

  const addElementHandler = (flashcard: FlashCardStructure) => {
    setCurrentFlashCard((prevState) => [...prevState, flashcard]);
  };
  return (
    <div>
      <Header />
      <main className={classes.content}>
        <FlashCardForm onSubmitHandler={addElementHandler} />
        <div className={classes['flashcard-list']}>
          <FlashCardList flashcards={currentFlashCard}/>
        </div>
      </main>
    </div>
  );
}

export default App;
