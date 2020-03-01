import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from './components/Container'

function App() {
  return (
    <div className="App">
      {/* API: https://jobs.github.com/positions.json?search=react */}
      <Container/>
    </div>
  );
}

export default App;
