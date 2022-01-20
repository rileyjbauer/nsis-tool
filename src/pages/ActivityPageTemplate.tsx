import { BasicPage } from '../components/basicPage/BasicPage';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { makeQueryString } from '../components/ActivityDetail';
import { ErrorElement } from '../components/ErrorElement';
import { MASTER_SECTOR_MAP } from './Maps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import './ActivityPageTemplate.css';

export const ACTIVITY_PARAM = 'activity';
export const SECTOR_PARAM = 'sector';
export const SELECTED_ACTIVITY_PARAM = 'selected';

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

function getURL(thisSectorKey: string, thisActivityKey: string, activity: Activity, navButtonSelected: number): string {
  let params = makeQueryString(activity);
  params.append(SECTOR_PARAM, thisSectorKey);
  params.append(ACTIVITY_PARAM, thisActivityKey);
  params.append(SELECTED_ACTIVITY_PARAM, navButtonSelected + '');
  return 'activityDetail?' + params.toString();
}

export function ActivityPageTemplate() {
  let navButtonSelected = -1;
  const [searchParams, setSearchParams] = useSearchParams();
  const [menuExpanded, setMenuExpanded] = useState(false);

  const thisSectorKey = searchParams.get(SECTOR_PARAM);
  if (!thisSectorKey) {
    return <ErrorElement message={`URL missing search param: ${SECTOR_PARAM}`} />
  }

  const thisActivityKey = searchParams.get(ACTIVITY_PARAM);
  if (!thisActivityKey) {
    return <ErrorElement message={`URL missing search param: ${ACTIVITY_PARAM}`} />
  }
  const navButtonSelectedParam = searchParams.get(SELECTED_ACTIVITY_PARAM);
  if (navButtonSelectedParam) {
    navButtonSelected = Number(navButtonSelectedParam);
  }

  const thisSector = MASTER_SECTOR_MAP[thisSectorKey];
  const thisActivity = thisSector[thisActivityKey];

  const content =
    <div className='activity-page-template-container'>
      <div className='activity-page-template-nav-container'>
        <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => setMenuExpanded(!menuExpanded)}>
          <p className='activity-page-template-instructions'>
            Select the activity you are undertaking:
          </p>
          <div className='activity-page-template-dropdown'>
            <ArrowDropDownIcon sx={{ fontSize: 40, color: '#fe8200' }} />
          </div>
        </div>
        <div className={`activity-page-template-nav-button-container ${menuExpanded ? 'activity-menu-expanded' : ''}`}>
          {thisActivity.activities.map((activity, i) => (
            <Link key={i} to={getURL(thisSectorKey, thisActivityKey, activity, i)} className='non-underlined-link' onClick={() => setMenuExpanded(false)}>
              <div className={`activity-page-template-nav-button ${navButtonSelected === i ? 'activity-page-template-nav-button-selected' : ''}`}>
                <p>{activity.activityTitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='activity-page-template-content-box' onClick={() => setMenuExpanded(false)}>
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
