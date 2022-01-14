import { Link } from 'react-router-dom';
import { ArrowNavBar } from '../arrowNavBar/ArrowNavBar';
import './BasicPage.css';

interface BasicPageProps {
  title?: string;
  content?: JSX.Element;
  navForward?: string;
  navBackward?: string;
}

export function BasicPage(props: BasicPageProps) {
  return (
    <div>
      <div className='header-bar'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h1 className='header-bar-title'>NSIS Tool</h1>
        </Link>
        <hr className='header-hr' />
        <div className='nav-bar'>
          <Link to='/mainNav'>Start Over</Link>
          <Link to='/interventionsList'>All Nutrition Interventions</Link>
          <Link to='/genderIntegrationsList'>All Gender Integrations</Link>
        </div>
      </div>
      <div className="content">
        {props.title && <h1>{props.title}</h1>}
        {props.content}
        <ArrowNavBar back={props.navBackward} forward={props.navForward} />
      </div>
    </div>
  );
}
