import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "../src/components/Home"
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/home' element={< Home />}></Route>
                <Route exact path='/resume' element={< Resume />}></Route>
                <Route exact path='/projects' element={< Projects />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
