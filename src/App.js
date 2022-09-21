import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import About from './Component/Pages/About';
import Error from './Component/Layout/Error';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <>
    <Header/>
    
    <Home/>

    <Footer/>

    </>
  );
}

export default App;
