import React from "react";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import Contacts from "./components/pages/Contacts";
import Register from "./components/pages/Register";
import UserProfile from "./components/pages/UserProfile";
import EditProfile from "./components/pages/EditProfile";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/contacts" Component={Contacts}></Route>
          <Route path="/login" Component={LogIn}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/user-profile" Component={UserProfile}></Route>
          <Route path="/user-profile/edit-profile/:username" Component={EditProfile}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}