import React from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar';
import Create  from './components/pages/Create/Create';
import HomePage from './components/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
