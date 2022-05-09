import React from 'react';
import { Link } from 'react-router-dom';
import SixtyDecibelsLogo from '../../img/60_decibels.png';
import LateriteLogo from '../../img/lateriteLogo.png';
import TanagerFooterLogo from '../../img/TanagerFooterLogo.png';
import TanagerMainLogo from '../../img/TanagerMainLogo.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <div className='App-content'>
          <div className='App-header'>
            <a href='https://tanagerintl.org' className='App-main-logo' >
              <img src={TanagerMainLogo} alt='tanager, an ACDI/VOCA affiliate' />
            </a>
            <div>
              <h1 className='App-h1'>
                Food Systems Nutrition-Sensitive
              </h1>
              <h1 className='App-h1'>
                Intervention Selection Tool
              </h1>
            </div>
          </div>
        </div>
        <hr className='App-hr' />
        <div className='App-content'>
          <div className='App-nav-button-container'>
            <Link to='/welcome' className='non-underlined-link'>
              <div className='nav-button-card App-nav-button'>
                <p>Introduction</p>
              </div>
            </Link>
            <div className='App-nav-button-spacer' />
            <Link to='/mainNav' className='non-underlined-link'>
              <div className='nav-button-card App-nav-button'>
                <p>Go to Tool</p>
              </div>
            </Link>
          </div>

        </div>
      </div>
      <div className='App-content'>
        <h2 className='App-text'>
          The NSIS tool was developed for the Impacting Gender & Nutrition through Innovative Technical Exchange in Agriculture (IGNITE) mechanism, a five-year investment funded by the Bill & Melinda Gates Foundation and
          implemented by Tanager to improve household nutrition and women’s empowerment by
          strengthening African institutions’ ability to integrate nutrition and gender into their way of doing
          business and their agriculture interventions.
        </h2>
        <div className='App-logo-div'>
          <img src={TanagerFooterLogo} alt='Tanager' />
          <img src={LateriteLogo} alt='Laterite' />
          <img src={SixtyDecibelsLogo} alt='Sixty Decibels' />
        </div>
      </div>
    </div>
  );
}

export default App;
