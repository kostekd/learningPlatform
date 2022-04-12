import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <Header />
      <main className={classes.content}>
        <h1>Welcome to the future learning platform</h1>
        <section>
          This app is being constantly develop. Its main purpose will be to help
          people connect and learn foreign languages in the most efficient way
          possible.
        </section>
        <Link to="/add">Things in progress :)</Link>
      </main>
    </div>
  );
};

export default MainPage;
