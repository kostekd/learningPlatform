import React, { Fragment } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import FlashCardPage from "./pages/FlashCardPage";
import MainPage from "./pages/MainPage/MainPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";

function App() {
  return (
    <Fragment>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/add">
        <FlashCardPage />
      </Route>
      <Route exact path="/explore">
        <ExplorePage />
      </Route>
      <Route exact path="/login">
        <SignInPage />
      </Route>
    </Fragment>
  );
}

export default App;
