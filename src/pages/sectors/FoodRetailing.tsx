import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { SECTOR_PARAM } from '../ActivityPageTemplate';
import { ACTIVITY_PARAM } from '../ActivityPageTemplate';
import { FOOD_RETAILING_ACTIVITIES, FOOD_RETAILING_PAGE_MAP, SECTORS } from '../Maps';
import './Sector.css';

export function FoodRetailing() {
  const content =
    <div>
      <p>
        Select the box below that reflects the primary focus of your work in food retailing:
      </p>
      <div>
        <div className='sector-nav-button-container'>
          {Object.values(FOOD_RETAILING_ACTIVITIES).map((v, i) =>
            <Link key={i} to={`/activity?${ACTIVITY_PARAM}=${v}&${SECTOR_PARAM}=${SECTORS.FOOD_RETAILING}`} className='non-underlined-link'>
              <div className='sector-nav-button'>
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
