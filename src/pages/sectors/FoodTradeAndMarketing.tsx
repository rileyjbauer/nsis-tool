import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { SECTOR_PARAM } from '../ActivityPageTemplate';
import { ACTIVITY_PARAM } from '../ActivityPageTemplate';
import { FOOD_TRADE_ACTIVITIES, FOOD_TRADE_PAGE_MAP, SECTORS } from '../Maps';

export function FoodTradeAndMarketing() {
  const content =
    <div>
      <p>
        Select the box below that reflects the focus of your work in food trade/marketing:
      </p>
      <div>
        <div className='sector-nav-button-container'>
          {Object.values(FOOD_TRADE_ACTIVITIES).map((v, i) =>
            <Link key={i} to={`/activity?${ACTIVITY_PARAM}=${v}&${SECTOR_PARAM}=${SECTORS.FOOD_TRADE_AND_MARKETING}`} className='non-underlined-link'>
              <div className='sector-nav-button'>
                <p>{FOOD_TRADE_PAGE_MAP[v].pageTitle}</p>
              </div>
            </Link>)}
        </div>
      </div>
    </div>;


  return (
    <BasicPage
      title="Food Trade and Marketing"
      content={content}
      navBackward="/mainNav"
    />
  );
}
