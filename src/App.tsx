import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import FlashCardPage from "./pages/FlashCardPage";
import MainPage from "./pages/MainPage/MainPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import TestPage from "./pages/TestPage/TestPage";
import LogInPage from "./pages/LogInPage/LogInPage";

export enum APP_PAGE {
  HOME = '/',
  ADD = '/add',
  SIGN_IN = '/sign_in',
  EXPLORE = '/explore',
  LOG_IN = '/log_in',
  EXAM = '/exam',

}

function App() {
  return (
    <Fragment>
      <Route exact path={APP_PAGE.HOME}>
        <MainPage />
      </Route>
      <Route exact path={APP_PAGE.ADD}>
        <FlashCardPage />
      </Route>
      <Route exact path={APP_PAGE.EXPLORE}>
        <ExplorePage />
      </Route>
      <Route exact path={APP_PAGE.SIGN_IN}>
        <SignInPage />
      </Route>
      <Route exact path={APP_PAGE.LOG_IN}>
        <LogInPage />
      </Route>
      <Route exact path={APP_PAGE.EXAM}>
        <TestPage />
      </Route>
    </Fragment>
  );
}

export default App;
