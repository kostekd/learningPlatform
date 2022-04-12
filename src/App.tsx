import React, { Fragment } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import FlashCardPage from "./pages/FlashCardPage";
import MainPage from "./pages/MainPage/MainPage";
import LogInPage from "./pages/LogInPage/LogInPage";

function App() {
  return (
    <Fragment>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/add">
        <FlashCardPage />
      </Route>
      <Route exact path="/login">
        <LogInPage />
      </Route>
    </Fragment>
  );
}

export default App;
