import React from "react";
import { useHistory } from "react-router-dom";
import { APP_PAGE } from "../../App";

import Header from "../../components/Header/Header";
import classes from "./MainPage.module.css";

const MainPage = () => {
  const history = useHistory();

  const onTestClickHandler = () => {
    history.push(APP_PAGE.EXAM);
  }

  return (
    <div>
      <Header>
        <div className={classes.button}>
        <button onClick={onTestClickHandler}>Take a test</button>
        </div>
      </Header>
      <main className={classes.content}>
        <h1>Welcome to putLearn - languages learning platform</h1>
        <section>
          In putLearn we understand that the language is constantly developing and we want
          help people to keep up with the newest trends in English!
        </section>
        <h3>How to use the platform?</h3>
        <section>
          If you are not one of our user do not worry... You will still be able to contribute to
          our community and learn english words. However, if you want to practice and take a test prepared
          by our us make sure to create an account or log in.
        </section>
        <section>

        </section>
      </main>
    </div>
  );
};

export default MainPage;
