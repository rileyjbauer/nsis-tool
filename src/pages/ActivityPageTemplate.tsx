import { BasicPage } from '../components/BasicPage';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { makeQueryString } from '../components/DrillDownTemplate';
import { useState } from 'react';
import { ErrorElement } from '../components/ErrorElement';
import { PRODUCTION_ACTIVITY_PARAM, PRODUCTION_PAGE_MAP } from './production/Production';

export type Activity = {
  activityTitle: string;
  interventionIds: number[];
}

export interface ActivityTemplateProps {
  activities: Activity[];
  pageTitle: string;
  navBackwardPath: string;
  urlPath: string;
}

function getURL(thisActivityKey: string, activity: Activity): string {
  let params = makeQueryString(activity);
  params.append(PRODUCTION_ACTIVITY_PARAM, thisActivityKey);
  return 'drillDown?' + params.toString();
}

export function ActivityPageTemplate() {
  let [navButtonSelected, setNavButtonSelected] = useState(-1);
  const [searchParams, setSearchParams] = useSearchParams();
  const thisActivityKey = searchParams.get(PRODUCTION_ACTIVITY_PARAM);

  if (!thisActivityKey) {
    return <ErrorElement message={`URL missing search param: ${PRODUCTION_ACTIVITY_PARAM}`} />
  }

  const thisActivity = PRODUCTION_PAGE_MAP[thisActivityKey];
  console.log(thisActivity);

  const content =
    <div style={{ display: 'flex' }}>
      <div>
        <p className='padding-10' >Select the activity you are undertaking:</p>
        {thisActivity.activities.map((activity, i) => (
          <Link key={i} to={getURL(thisActivityKey, activity)} className='non-underlined-link' onClick={() => setNavButtonSelected(i)}>
            <div className={`left-nav-button ${navButtonSelected === i ? ' left-nav-button-selected' : ''}`}>
              <p>{activity.activityTitle}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className='content-box'>
        <Outlet />
      </div>
    </div >;

  return (
    <BasicPage
      title={thisActivity.pageTitle}
      content={content}
      navBackward={`/${thisActivity.navBackwardPath}`}
    />
  );
}
