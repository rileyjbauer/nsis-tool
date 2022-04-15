import { Link, useSearchParams } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { ErrorElement } from '../../components/ErrorElement';
import { MASTER_SECTOR_MAP } from '../../data/SectorMaps';
import { SECTOR_AREA_PARAM } from '../sectorAreaPageTemplate/SectorAreaPageTemplate';
import './Sector.css';

export const SECTOR_PARAM = 'sector';

export function Sector() {
  const [searchParams, setSearchParams] = useSearchParams();

  const thisSectorKey = searchParams.get(SECTOR_PARAM);
  if (!thisSectorKey) {
    return <ErrorElement message={`URL missing search param: ${SECTOR_PARAM}`} />
  }

  const sector = MASTER_SECTOR_MAP[thisSectorKey];

  const content =
    <div className='sector-container'>
      <p>{sector.header}</p>
      <div className='sector-nav-button-container'>
        {Object.values(sector.sectorAreas).map((v, i) =>
          <Link key={i} to={`/sector_area?${SECTOR_AREA_PARAM}=${v}&${SECTOR_PARAM}=${thisSectorKey}`} className='non-underlined-link'>
            <div className='nav-button-card'>
              <p>{sector.map[v].pageTitle}</p>
            </div>
          </Link>)}
      </div>
    </div>;


  return (
    <BasicPage
      title={sector.title}
      content={content}
      navBackward='/mainNav'
    />
  );
}
