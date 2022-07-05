import React from 'react';
import './App.css';
import CreateMeeting from './components/CreateMeeting';
import CreateTopic from './components/CreateTopic';
import Topic from './components/Topic';

const App = () => {
  return (
    <div className="App">
      <Topic />
      <CreateMeeting />
    </div>
  );
};

export default App;
