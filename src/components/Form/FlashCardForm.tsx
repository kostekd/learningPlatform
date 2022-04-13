import React from "react";
import useInput from "../../hooks/useInput";
import { FlashCardStructure } from "../FlashCard/AddFlashCard";
import FlashCard from "../FlashCard/FlashCard";
import classes from "./FlashCardForm.module.css";

interface FlashCardFormProps {
  onSubmitHandler: Function;
}

const FlashCardForm = (props: FlashCardFormProps) => {
  const {
    value: enteredTop,
    isValid: isTopValid,
    onChangeHandler: onChangeTopHandler,
    onBlurHandler: onBlurTopHandler,
    reset: resetTop
  } = useInput();

  const {
    value: enteredBottom,
    isValid: isBottomValid,
    onChangeHandler: onChangeBottomHandler,
    onBlurHandler: onBlurBottomHandler,
    reset: resetBottom
  } = useInput();

  const onSubmitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response: FlashCardStructure = {
      top: enteredTop,
      bottom: enteredBottom,
    };

    props.onSubmitHandler(response);
    resetTop();
    resetBottom();
  };

  const errorMessage = (
    <p className={classes["error-paragraph"]}>Invalid input</p>
  );

  const topStyle = !isTopValid
    ? classes["input-field"]
    : classes["error"];
  const bottomStyle = !isBottomValid
    ? classes["input-field"]
    : classes["error"];

  return (
    <div className={classes.content}>
      <form className={classes["form-control"]} onSubmit={onSubmitFormHandler}>
        <h2>Create your FlashCard :)</h2>
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
          {isTopValid && errorMessage}
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
          {isBottomValid && errorMessage}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <div className={classes.flashcard}>
        <h4>Overview:</h4>
        <FlashCard top={enteredTop} bottom={enteredBottom}/>
      </div>
    </div>
  );
};

export default FlashCardForm;
