import React, { useEffect } from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar';
import AssetList  from './components/pages/AssetList/AssetList';
import Create  from './components/pages/Create/Create';
import HomePage from './components/pages/HomePage/HomePage';
import  Asset  from './components/pages/Asset/Asset';
import TransHist from './components/pages/TransHist/TransHist';
import LoginSignUp from "./components/user/loginSignUp/LoginSignUp";
import Footer from "./components/Layouts/footer/Footer"
import Chatbot from "./components/ChatBot/ChatBot";
import CFriend from './components/pages/CFriend/CFriend';
// Fonts
import WebFont from "webfontloader";
import TransferPage from './components/pages/TransferPage/TransferPage';
import { Test } from './components/pages/Test/Test';
import FList from './components/pages/CFriend/FList';

function App() {

    // UseEffect for Fonts
    useEffect(() => {
      WebFont.load({
        google: {
          families: ["Roboto", "Droid Sans", "Chilanka"]
        }
      })
    }, []);

  return (
    <div className="App GreyBG">
      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/assetList" element={<AssetList/>} />
          <Route exact path="/asset/:id" element={<Asset />} />
          <Route exact path="/history" element={<TransHist />} />
          <Route exact path="/login" element={<LoginSignUp />} />
          <Route exact path="/transfer/:id" element={<TransferPage/>}/>
          <Route exact path="/flist" element={<FList />}/>
          <Route exact path="/Test" element={<Test  />}/>
          
        </Routes>
        <Chatbot/>
       <  Footer />
      </Router>
    </div>
  )
}

export default App
