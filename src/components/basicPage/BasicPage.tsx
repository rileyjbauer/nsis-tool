import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TanagerMainLogo from '../../img/TanagerMainLogo.png';
import { ArrowNavBar } from '../arrowNavBar/ArrowNavBar';
import './BasicPage.css';

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
          <a href='https://tanagerintl.org' className='header-bar-tanager-logo' >
            <img src={TanagerMainLogo} alt='tanager, an ACDI/VOCA affiliate' />
          </a>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h1 className='header-bar-title'>NSIS Tool</h1>
          </Link>
        </span>
        <div className='menu-button'>
          <MenuIcon sx={{ fontSize: 50 }} onClick={() => setMenuExpanded(!menuExpanded)} />
        </div>
        <div className={`nav-bar ${menuExpanded ? 'menu-expanded' : ''}`}>
          <Link to='/mainNav'>Start Over</Link>
          <Link to='/interventionsList'>All Nutrition Interventions</Link>
          <Link to='/genderIntegrationsList'>All Gender Integrations</Link>
        </div>
      </div>
      <div className='page-content' onClick={() => setMenuExpanded(false)}>
        {props.title && <h1 className='content-title'>{props.title}</h1>}
        {props.content}
      </div>
      <div className='bottom-spacer' />
      <ArrowNavBar back={props.navBackward} forward={props.navForward} />
    </div>
  );
}
