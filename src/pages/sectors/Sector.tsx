import { Link, useSearchParams } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { ErrorElement } from '../../components/ErrorElement';
import { ACTIVITY_PARAM } from '../ActivityPageTemplate';
import { MASTER_SECTOR_MAP } from '../SectorMaps';
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
    <div>
      <p>{sector.header}</p>
      <div className='sector-nav-button-container'>
        {Object.values(sector.activities).map((v, i) =>
          <Link key={i} to={`/activity?${ACTIVITY_PARAM}=${v}&${SECTOR_PARAM}=${thisSectorKey}`} className='non-underlined-link'>
            <div className='sector-nav-button'>
              <p>{sector.map[v].pageTitle}</p>
            </div>
          </Link>)}
      </div>
    </div>;


  return (
    <BasicPage
      title={sector.title}
      content={content}
      navBackward="/mainNav"
    />
  );
}
