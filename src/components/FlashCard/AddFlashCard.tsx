import React from "react";
import Header from "../Header/Header";
import FlashCardForm from "../Form/FlashCardForm";
import classes from "./AddFlashCard.module.css";

export interface FlashCardStructure {
  top: String;
  bottom: String;
}

const url = "https://mywebsite-5ab91-default-rtdb.europe-west1.firebasedatabase.app/flashcards.json";

const AddFlashCard = () => {

  const addFlashCardHandler = async (flashcards: FlashCardStructure) => {

    try {
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

    catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Header />
      <main className={classes.content}>
        <FlashCardForm onSubmitHandler={addFlashCardHandler}/>
      </main>
    </div>
  );
}

export default AddFlashCard;
