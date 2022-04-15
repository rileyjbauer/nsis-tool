import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import ArrowSVG from '../../img/arrow.svg';
import './Welcome.css';

export function Welcome() {
  const [helpBoxDisplayed, setHelpBoxDisplayed] = useState(true);

  const content = (
    <div className='welcome-content'>
      <h3>
        Welcome to the Food Systems Nutrition-Sensitive Intervention Selection (NSIS) Tool. This tool will walk through the process of identifying, designing, and implementing nutrition-sensitive interventions.
      </h3>
      <h2>Introduction</h2>
      <p>
        Finding salient opportunities to integrate impactful nutrition interventions into market and food systems projects can be challenging. The Nutrition-Sensitive Intervention Selection (NSIS) Tool was built to aid implementers in identification of nutrition integration opportunities, without needing nutrition expertise. The NSIS Tool is an interactive, practice-oriented tool that provides evidence-based potential nutrition interventions, tailored to the level of actors you are working with within the food system.
      </p>
      <h2>Directions</h2>
      <p>
        The NSIS Tool will guide you to the information most relevant to you using a series of prompts, each more specific than the last. On each page, you will select the choice that most closely matches the area and type of work you're doing in the food system until you are presented with a list of potential nutrition interventions and gender Integrations. At any time you can use your browser's "back" button, or the arrow at the bottom left of the window to return to a previous page. You can also click "Start Over" at the top of the window to return to the beginning of the tool.
      </p>
      <p>
        If you wish to browse through all of the included nutrition interventions or gender integrations within the tool, you can click the buttons at the top of the page that read "All Nutrition Interventions" or "All Gender Integrations", respectively.
      </p>
      <h2>Gender Integration</h2>
      <p>
        Throughout the NSIS Tool, users will see opportunities for gender considerations, for the sub-components of the food system. If users want to dive deeper into gender integration, considerations, and transformative gender approaches, users can click the suggestions be taken to more thorough explanations.
      </p>
      <h2>Further considerations</h2>
      <p>
        The Food Systems NSIS Tool offers a non-exhaustive list of nutrition interventions that may be applicable to implementers working in agriculture, market systems, and/or food systems development. NSIS Design Tool users should work with their teams to determine which interventions are most relevant and how these interventions can be built into their work.
      </p>
      <p>
        IGNITE will continue to update the NSIS tool as needed, accounting for evolved thinking in the field and feedback from users.
      </p>
      <div className='welcome-begin-button-container'>
        <Link to='/mainNav' className='non-underlined-link'>
          <div className='nav-button-card'>
            <p>Get started!</p>
          </div>
        </Link>
      </div>
      {helpBoxDisplayed && (
        <div className='welcome-helpbox-container'>
          <div className='welcome-helpbox'>
            {/* <div className='welcome-helpbox-dismiss-container'> */}
            <button className='welcome-helpbox-dismiss-button' onClick={() => setHelpBoxDisplayed(false)}>
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>
            {/* </div> */}
            <p className='welcome-helpbox-text'>Click here at any time to go back!</p>
          </div>
          <img src={ArrowSVG} className='welcome-arrow' />
        </div>
      )}
    </div>
  );

  return (
    <BasicPage
      title="Welcome"
      content={content}
      navBackward="/"
      navForward="/mainNav"
    />
  );
}