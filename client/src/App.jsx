import React from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar';
import { AssetList } from './components/pages/AssetList/AssetList';
import Create  from './components/pages/Create/Create';
import HomePage from './components/pages/HomePage/HomePage';
import { Asset } from './components/pages/Asset/Asset';
import { TransHist } from './components/pages/TransHist/TransHist';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/assetList" element={<AssetList/>} />
          <Route exact path="/asset" element={<Asset/>} />
          <Route exact path="/history" element={<TransHist />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
