import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/BasicPage';
import { SECTOR_PARAM } from '../ActivityPageTemplate';
import { ACTIVITY_PARAM } from '../ActivityPageTemplate';
import { ENABLING_ENVIRONMENT_ACTIVITIES, ENABLING_ENVIRONMENT_PAGE_MAP, SECTORS } from '../Maps';

export function EnablingEnvironment() {
  const content =
    <div>
      <p>
        Select the box below that reflects the primary focus of your work in enabling environment:
      </p>
      <div>
        <div>
          {Object.values(ENABLING_ENVIRONMENT_ACTIVITIES).map((v, i) =>
            <Link key={i} to={`/activity?${ACTIVITY_PARAM}=${v}&${SECTOR_PARAM}=${SECTORS.ENABLING_ENVIRONMENT}`}>
              <div className='float-nav-button'>
                <p>{ENABLING_ENVIRONMENT_PAGE_MAP[v].pageTitle}</p>
              </div>
            </Link>)}
        </div>
      </div>
    </div>;


  return (
    <BasicPage
      title="Enabling Environment"
      content={content}
      navBackward="/mainNav"
    />
  );
}
