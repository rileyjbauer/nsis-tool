import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { ACTIVITY_PARAM, SECTOR_PARAM } from '../ActivityPageTemplate';
import { PRODUCTION_ACTIVITIES, PRODUCTION_PAGE_MAP, SECTORS } from '../Maps';

export function Production() {
  const content =
    <div>
      <p>
        Select the box below that reflects the focus of your work in agriculture/livestock production:
      </p>
      <div>
        <div>
          {Object.values(PRODUCTION_ACTIVITIES).map((v, i) =>
            <Link key={i} to={`/activity?${ACTIVITY_PARAM}=${v}&${SECTOR_PARAM}=${SECTORS.PRODUCTION}`}>
              <div className='float-nav-button'>
                <p>{PRODUCTION_PAGE_MAP[v].pageTitle}</p>
              </div>
            </Link>)}
        </div>
      </div>
    </div>;


  return (
    <BasicPage
      title="Production"
      content={content}
      navBackward="/mainNav"
    />
  );
}
