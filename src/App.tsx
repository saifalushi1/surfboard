import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Agenda from './components/Agenda';
import Meeting from './components/Meeting';

const App = () => {
  return (
    <div className="App">
      {/* Need to add a way to target which meeting they are in so if they add topics it is tied to that meetingh
       */}
      <Routes>
        <Route path="/" element={<Agenda />} />
        <Route path="meeting/:id" element={<Meeting />} />
      </Routes>
    </div>
  );
};

export default App;
