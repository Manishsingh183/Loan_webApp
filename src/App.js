import './App.css';
import Profile from '../src/components/profile/profile';
import Request from '../src/components/request/request'; 
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import HomePage from "../src/components/HomePage/HomePage";
import LoginPage from "../src/components/LoginPage/LoginPage";
import Home from "../src/components/LoginPage/Home/Home";
import Secrets from "../src/components/LoginPage/Secrets/Secrets";
import Login from '../src/components/Login/login';
import "./App.css";


function App() {

  return <Fragment>

     
      <NavBar/>
      

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="test" element={<h1>Test page</h1>} />
          <Route path="loginpage" element={<LoginPage />} />
          <Route path="login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/request" element={<Request />} />
          <Route path="/secrets" element={<Secrets />} />

      </Routes>
      
      

  </Fragment>;
} 

export default App;
