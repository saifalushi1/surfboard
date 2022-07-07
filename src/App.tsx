import React from 'react';
import './App.css';
import Meeting from './components/Meeting';
import Topic from './components/Topic';

const App = () => {
  return (
    <div className="App">
      <Meeting />
      <Topic />
    </div>
  );
};

export default App;
