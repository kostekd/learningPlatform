import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import FlashCardForm from "../Form/FlashCardForm";
import classes from "./AddFlashCard.module.css";

export interface FlashCardStructure {
  top: String;
  bottom: String;
}

const url = "https://mywebsite-5ab91-default-rtdb.europe-west1.firebasedatabase.app/flashcards.json";


const AddFlashCard = () => {
  const [flashcards, setFlashcards] = useState<FlashCardStructure[]>([]);

  const fetchFlashCardHandler = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
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

  const checkIfRepeat = (flashcard: FlashCardStructure) => {
    let flag = false;
    flashcards.forEach(element => {
      if(element.top === flashcard.top){
        flag = true;
      }
    })

    return flag;
  }

  const addFlashCardHandler = async (flashcard: FlashCardStructure) => {
    if (checkIfRepeat(flashcard)) {
      alert("Fiszka już istnieje");
    }
    else{
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(flashcard),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if(response.ok){
          console.log("Success");
        }
      }
  
      catch (error) {
        alert(error);
      }
    }
  }

  useEffect(() => {
    fetchFlashCardHandler();
  }, []);

  return (
    <div>
      <Header />
      <main className={classes.content}>
        <FlashCardForm onSubmitHandler={addFlashCardHandler} />
      </main>
    </div>
  );
}

export default AddFlashCard;
