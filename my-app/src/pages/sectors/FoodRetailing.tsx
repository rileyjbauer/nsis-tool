import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/BasicPage';
import { SECTOR_PARAM } from '../ActivityPageTemplate';
import { ACTIVITY_PARAM } from '../ActivityPageTemplate';
import { FOOD_RETAILING_ACTIVITIES, FOOD_RETAILING_PAGE_MAP, SECTORS } from '../Maps';

export function FoodRetailing() {
  const content =
    <div>
      <p>
        Select the box below that reflects the primary focus of your work in food retailing:
      </p>
      <div>
        <div>
          {Object.values(FOOD_RETAILING_ACTIVITIES).map((v, i) =>
            <Link key={i} to={`/activity?${ACTIVITY_PARAM}=${v}&${SECTOR_PARAM}=${SECTORS.FOOD_RETAILING}`}>
              <div className='float-nav-button'>
                <p>{FOOD_RETAILING_PAGE_MAP[v].pageTitle}</p>
              </div>
            </Link>)}
        </div>
      </div>
    </div>;


  return (
    <BasicPage
      title="Food Retailing"
      content={content}
      navBackward="/mainNav"
    />
  );
}
