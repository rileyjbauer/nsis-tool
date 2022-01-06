import { BasicPage } from '../components/BasicPage';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { makeQueryString } from '../components/ActivityDetail';
import { useState } from 'react';
import { ErrorElement } from '../components/ErrorElement';
import { MASTER_SECTOR_MAP } from './Maps';

export const ACTIVITY_PARAM = 'activity';
export const SECTOR_PARAM = 'sector';

export type Activity = {
  activityTitle: string;
  interventionIds: number[];
  genderIntegrationIds: number[];
}

export interface ActivityTemplateProps {
  activities: Activity[];
  pageTitle: string;
  navBackwardPath: string;
}

function getURL(thisSectorKey: string, thisActivityKey: string, activity: Activity): string {
  let params = makeQueryString(activity);
  params.append(SECTOR_PARAM, thisSectorKey);
  params.append(ACTIVITY_PARAM, thisActivityKey);
  return 'activityDetail?' + params.toString();
}

export function ActivityPageTemplate() {
  let [navButtonSelected, setNavButtonSelected] = useState(-1);
  const [searchParams, setSearchParams] = useSearchParams();

  const thisSectorKey = searchParams.get(SECTOR_PARAM);
  if (!thisSectorKey) {
    return <ErrorElement message={`URL missing search param: ${SECTOR_PARAM}`} />
  }

  const thisActivityKey = searchParams.get(ACTIVITY_PARAM);
  if (!thisActivityKey) {
    return <ErrorElement message={`URL missing search param: ${ACTIVITY_PARAM}`} />
  }

  const thisSector = MASTER_SECTOR_MAP[thisSectorKey];
  const thisActivity = thisSector[thisActivityKey];

  const content =
    <div style={{ display: 'flex' }}>
      <div>
        <p className='padding-10' >Select the activity you are undertaking:</p>
        {thisActivity.activities.map((activity, i) => (
          <Link key={i} to={getURL(thisSectorKey, thisActivityKey, activity)} className='non-underlined-link' onClick={() => setNavButtonSelected(i)}>
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
