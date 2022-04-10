import React, { useState } from "react";
import { FlashCardStructure } from "../FlashCard/AddFlashCard";
import classes from "./FlashCardForm.module.css";

interface FlashCardFormProps {
  onSubmitHandler: Function;
}

const FlashCardForm = (props: FlashCardFormProps) => {
  const [enteredTop, setEnteredTop] = useState("");
  const [enteredBottom, setEnteredBottom] = useState("");

  const [isTopTouched, setIsTopTouched] = useState(false);
  const [isBottomTouched, setIsBottomTouched] = useState(false);

  const isEnteredTopValid: Boolean = enteredTop.trim() === "" && isTopTouched;
  const isEnteredBottomValid: Boolean =
    enteredBottom.trim() === "" && isBottomTouched;

  const onChangeTopHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const top = event.currentTarget.value;
    setEnteredTop(top);
  };

  const onChangeBottomHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const bottom = event.currentTarget.value;
    setEnteredBottom(bottom);
  };

  const onBlurTopHandler = () => {
    setIsTopTouched(true);
  };

  const onBlurBottomHandler = () => {
    setIsBottomTouched(true);
  };

  const onSubmitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response: FlashCardStructure = {
      top: enteredTop,
      bottom: enteredBottom,
    };

    props.onSubmitHandler(response);
    setEnteredTop("");
    setEnteredBottom("");
    setIsBottomTouched(false);
    setIsTopTouched(false);
  };

  const errorMessage = (
    <p className={classes["error-paragraph"]}>Invalid input</p>
  );

  const topStyle = !isEnteredTopValid
    ? classes["input-field"]
    : classes["error"];
  const bottomStyle = !isEnteredBottomValid
    ? classes["input-field"]
    : classes["error"];

  return (
    <form className={classes["form-control"]} onSubmit={onSubmitFormHandler}>
      <h2>Create your fiszka :)</h2>
      <div className={topStyle}>
        <label htmlFor="top">Top</label>
        <br />
        <input
          type="text"
          id="top"
          value={enteredTop}
          onChange={onChangeTopHandler}
          onBlur={onBlurTopHandler}
        />
        {isEnteredTopValid && errorMessage}
      </div>
      <div className={bottomStyle}>
        <label htmlFor="bottom">Bottom</label>
        <br />
        <input
          type="text"
          id="bottom"
          value={enteredBottom}
          onChange={onChangeBottomHandler}
          onBlur={onBlurBottomHandler}
        />
        {isEnteredBottomValid && errorMessage}
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FlashCardForm;
