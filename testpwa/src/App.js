import React from 'react';
import logo from './logo.svg';
import './App.css';
import { configNotification } from './services/firebaseService';

function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
     <button onClick={configNotification}> config notification</button>
    </div>
  );
}

export default App;
