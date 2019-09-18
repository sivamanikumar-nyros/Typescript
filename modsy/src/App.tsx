import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import Goal from "./components/project/goal";
import Room from "./components/project/room";
import Furniture from "./components/project/furniture";
import Budget from "./components/project/budget";
import Style from "./components/project/style";
import Recommendation from "./components/project/recommendation";
import Header from "./components/project/header";
import Home from "./components/project/home";
import Account from "./components/project/account";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";



const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
       	<Route exact path="/room" component={Room} />
        <Route exact path="/goal" component={Goal} />
        <Route exact path="/furniture" component={Furniture} />
        <Route exact path="/budget" component={Budget} />
        <Route exact path="/style" component={Style} />
        <Route exact path="/recommendation" component={Recommendation} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
};

export default App;
