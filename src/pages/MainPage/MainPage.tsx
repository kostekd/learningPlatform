import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/Header";
import classes from "./MainPage.module.css";

const MainPage = () => {
  const history = useHistory();

  const onTestClickHandler = () => {
    history.push('/test');
  }

  return (
    <div>
      <Header>
        <div className={classes.button}>
        <button onClick={onTestClickHandler}>Take a test</button>
        </div>
      </Header>
      <main className={classes.content}>
        <h1>Welcome to the future learning platform</h1>
        <section>
          This app is being constantly develop. Its main purpose will be to help
          people connect and learn foreign languages in the most efficient way
          possible.
        </section>
      </main>
    </div>
  );
};

export default MainPage;
