// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header";
import { Route, Switch, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import LoginSignUp from "./Components/LoginSignUp";
import Login from "./Components/Login";
import Book from "./Components/Book";
import { useState } from "react";
import Admin from "./Components/Admin";
import Dashboard from "./Components/Dashboard";

function App() {
  const authenticate = localStorage.getItem("authenticate");
  const user = JSON.parse(localStorage.getItem("user"));
  const id = JSON.parse(localStorage.getItem("id"));
  console.log(user);
  console.log(authenticate);
  console.log(id);

  return (
    <div className="banner">
      <BrowserRouter>
        <Header authenticate={authenticate} user={user} />
        {/* <Book authenticate={authenticate} user={user} id={id} /> */}

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signUp" element={<LoginSignUp />} />
          <Route exact path="/admin" element={<Admin />} />

          <Route path="*" element={<navigate to="/" />} />

          <Route
            exact
            path="/book"
            element={
              authenticate ? (
                <Book authenticate={authenticate} user={user} id={id} />
              ) : (
                <Login />
              )
            }
          />

          <Route
             exact path = "/dashboard"
             element={
              ((authenticate) && (user)) ? (
                <Dashboard authenticate={authenticate} user={user} id={id} />
              ):(
                <Admin/>
              )
             }
          />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
