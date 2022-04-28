import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Homepage from './pages/HomePage/Homepage';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
