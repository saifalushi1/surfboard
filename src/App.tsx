import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Agenda from './components/Agenda';
import Meeting from './components/Meeting';
import Navbar from './components/Navigation/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Agenda />} />
        <Route path="meeting/:id" element={<Meeting />} />
      </Routes>
    </div>
  );
};

export default App;
