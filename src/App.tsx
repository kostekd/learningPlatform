import React, { Fragment } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import FlashCardPage from "./pages/FlashCardPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Fragment>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/add">
        <FlashCardPage />
      </Route>
    </Fragment>
  );
}

export default App;
