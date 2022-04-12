import React, { useState } from "react";
import classes from "./FlashCard.module.css";
import TopFlag from "./../../images/flags/us.svg";
import BottomFlag from "./../../images/flags/pl.svg";
import DownRightArrow from "./../../images/DownRight.svg";

interface FlashCardProps {
  top: String;
  bottom: String;
}

const FlashCard = (props: FlashCardProps) => {
  const [isTop, setIsTop] = useState(true);

  const label = isTop ? props.top : props.bottom;
  const flag = isTop ? TopFlag : BottomFlag;

  const onFlipClickHandler = () => {
      setIsTop((prevState) => !prevState);
  }

  return (
    <div className={classes.flashcard}>
      <div className={classes.flag}>
        <img src={flag} alt="Logo" />
      </div>
      <label className={classes.description}>{label}</label>
      <div className={classes["reverse-button"]}>
        <button onClick={onFlipClickHandler}><img src={DownRightArrow} alt="Logo" ></img></button>
      </div>
    </div>
  );
};

export default FlashCard;
