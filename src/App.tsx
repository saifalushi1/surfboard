import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Agenda from './components/Agenda';
import Meeting from './components/Meeting';
import TestMe from './components/TestMe';
import Topic from './components/Topic';

const App = () => {
  return (
    <div className="App">
      {/* Need to add a way to target which meeting they are in so if they add topics it is tied to that meetingh
       */}
      <Routes>
        <Route path="/" element={<Agenda />} />
        <Route path="meeting/:id" element={<Meeting />} />
        <Route path="test/:id" element={<TestMe />} />
      </Routes>
    </div>
  );
};

export default App;
