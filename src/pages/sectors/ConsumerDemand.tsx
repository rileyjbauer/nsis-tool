import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { SECTOR_PARAM } from '../ActivityPageTemplate';
import { ACTIVITY_PARAM } from '../ActivityPageTemplate';
import { CONSUMER_DEMAND_ACTIVITIES, CONSUMER_DEMAND_PAGE_MAP, SECTORS } from '../Maps';
import './Sector.css';

export function ConsumerDemand() {
  const content =
    <div>
      <p>
        Select the box below that reflects the primary focus of your work in consumer demand:
      </p>
      <div>
        <div className='sector-nav-button-container'>
          {Object.values(CONSUMER_DEMAND_ACTIVITIES).map((v, i) =>
            <Link key={i} to={`/activity?${ACTIVITY_PARAM}=${v}&${SECTOR_PARAM}=${SECTORS.CONSUMER_DEMAND}`} className='non-underlined-link'>
              <div className='sector-nav-button'>
                <p>{CONSUMER_DEMAND_PAGE_MAP[v].pageTitle}</p>
              </div>
            </Link>)}
        </div>
      </div>
    </div>;


  return (
    <BasicPage
      title="Consumer Demand"
      content={content}
      navBackward="/mainNav"
    />
  );
}
