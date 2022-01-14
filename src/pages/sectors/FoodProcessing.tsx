import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { SECTOR_PARAM } from '../ActivityPageTemplate';
import { ACTIVITY_PARAM } from '../ActivityPageTemplate';
import { FOOD_PROCESSING_ACTIVITIES, FOOD_PROCESSING_PAGE_MAP, SECTORS } from '../Maps';

export function FoodProcessing() {
  const content =
    <div>
      <p>
        Select the box below that reflects the primary focus of your work in processing:
      </p>
      <div>
        <div>
          {Object.values(FOOD_PROCESSING_ACTIVITIES).map((v, i) =>
            <Link key={i} to={`/activity?${ACTIVITY_PARAM}=${v}&${SECTOR_PARAM}=${SECTORS.FOOD_PROCESSING}`}>
              <div className='float-nav-button'>
                <p>{FOOD_PROCESSING_PAGE_MAP[v].pageTitle}</p>
              </div>
            </Link>)}
        </div>
      </div>
    </div>;


  return (
    <BasicPage
      title="Food Processing"
      content={content}
      navBackward="/mainNav"
    />
  );
}
