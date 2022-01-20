import { Link } from 'react-router-dom';
import { ArrowNavBar } from '../arrowNavBar/ArrowNavBar';
import MenuIcon from '@mui/icons-material/Menu';
import './BasicPage.css';
import { useState } from 'react';

interface BasicPageProps {
  title?: string;
  content?: JSX.Element;
  navForward?: string;
  navBackward?: string;
}

export function BasicPage(props: BasicPageProps) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  return (
    <div>
      <div className='header-bar'>
        <span className='title-bar'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h1 className='header-bar-title'>NSIS Tool</h1>
          </Link>
          <div className='menu-button'>
            <MenuIcon sx={{ fontSize: 50 }} onClick={() => setMenuExpanded(!menuExpanded)} />
          </div>
        </span>
        <hr className='header-hr' />
        <div className={`nav-bar ${menuExpanded ? 'menu-expanded' : ''}`}>
          <Link to='/mainNav'>Start Over</Link>
          <Link to='/interventionsList'>All Nutrition Interventions</Link>
          <Link to='/genderIntegrationsList'>All Gender Integrations</Link>
        </div>
      </div>
      <div className="content" onClick={() => setMenuExpanded(false)}>
        {props.title && <h1 className='content-title'>{props.title}</h1>}
        {props.content}
        <ArrowNavBar back={props.navBackward} forward={props.navForward} />
      </div>
    </div>
  );
}
