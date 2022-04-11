import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const MainPage = () => {
  return (
    <div>
      <Header/>
      <h1>Welcome to the future learning platform</h1>
      <Link to='/add'>Things in progress :)</Link>
    </div>
  );
};

export default MainPage;
