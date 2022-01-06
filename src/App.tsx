import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className="App-h1">
        FOOD SYSTEMS NUTRITION-SENSITIVE INTERVENTION SELECTION DESIGN TOOL
      </h1>
      <h2 className="App-h2">
        IGNITE: Building Technical Innovation in Nutrition-Sensitive and Gender-Integrated Agriculture
      </h2>
      <Link to="/welcome" className="App-start-link">Let's get started!</Link>
      <div style={{ margin: '30px' }} />
      <Link to="/mainNav" className="App-start-link">Or jump straight to the Main Menu</Link>
    </div>
  );
}

export default App;
