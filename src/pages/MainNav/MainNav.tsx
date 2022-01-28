import { BasicPage } from '../../components/basicPage/BasicPage';
import './MainNav.css'
import { Link } from 'react-router-dom';
import { SECTOR_PARAM } from '../sectors/Sector';
import { MASTER_SECTOR_MAP, SECTORS } from '../../SectorMaps';

function getURL(thisSectorKey: string): string {
  const params = new URLSearchParams();
  params.append(SECTOR_PARAM, thisSectorKey);
  return '/sector?' + params.toString();
}

export function MainNav() {
  const content =
    <div className='nav-container'>
      {Object.values(SECTORS).map((val) => (
        <div className='nav-button' key={val}>
          <Link to={getURL(val)} className='nav-link'>
            <img src={MASTER_SECTOR_MAP[val].imgSrc} className='mobile-nav-button-img' alt={MASTER_SECTOR_MAP[val].title} />
            <span className='nav-button-text'>
              {MASTER_SECTOR_MAP[val].title}
            </span>
            <img src={MASTER_SECTOR_MAP[val].imgSrc} className='nav-button-img' alt={MASTER_SECTOR_MAP[val].title} />
          </Link>
        </div >
      ))}
    </div >;

  return (
    <BasicPage
      title='Where in the Food System is your project working?'
      content={content}
      navBackward='/welcome'
    />
  );
}
