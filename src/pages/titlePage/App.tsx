import React from 'react';
import './App.css';
import TanagerLogo from '../../img/TanagerLogo.png'
import SixtyDecibelsLogo from '../../img/60_decibels.png'
import LateriteLogo from '../../img/lateriteLogo.png'
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
      <div style={{ margin: '15px' }} />
      <Link to="/mainNav" className="App-start-link">Or jump straight to the Main Menu</Link>
      <hr className='App-hr' />
      <div className='App-logo-div'>
        <img src={TanagerLogo} alt='Tanager' />
        <img src={LateriteLogo} alt='Laterite' />
        <img src={SixtyDecibelsLogo} alt='Sixty Decibels' />
      </div>
    </div>
  );
}

export default App;
