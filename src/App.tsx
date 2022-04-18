import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import FlashCardPage from "./pages/FlashCardPage";
import MainPage from "./pages/MainPage/MainPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import TestPage from "./pages/TestPage/TestPage";

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
      <Route exact path="/test">
        <TestPage />
      </Route>
    </Fragment>
  );
}

export default App;
