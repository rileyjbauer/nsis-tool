import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useEffect, useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { makeActivityDetailQueryString } from '../../components/activityDetail/ActivityDetail';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { MASTER_SECTOR_MAP } from '../../data/SectorMaps';
import { ErrorPage } from '../errorPage/ErrorPage';
import { SECTOR_PARAM } from '../sectors/Sector';
import './SectorAreaPageTemplate.css';

export const SECTOR_AREA_PARAM = 'activity';
export const SELECTED_ACTIVITY_PARAM = 'selected';

export type Activity = {
  activityTitle: string;
  interventionIds: number[];
  genderIntegrationIds: number[];
}

export interface SectorAreaTemplateProps {
  activities: Activity[];
  pageTitle: string;
}

function getURL(thisSectorKey: string, thisSectorAreaKey: string, activity: Activity, navButtonSelected: number): string {
  let params = makeActivityDetailQueryString(activity);
  params.append(SECTOR_PARAM, thisSectorKey);
  params.append(SECTOR_AREA_PARAM, thisSectorAreaKey);
  params.append(SELECTED_ACTIVITY_PARAM, navButtonSelected + '');
  return 'activityDetail?' + params.toString();
}

export function SectorAreaPageTemplate() {
  let navButtonSelected = -1;
  const [searchParams, setSearchParams] = useSearchParams();
  const [menuExpanded, setMenuExpanded] = useState(false);

  // Ensures that if the activity menu is in dropdown form AND it exceeds the defined max-height (meaning it will be scrollable), then it will always open scrolled to the top
  useEffect(() => {
    if (menuExpanded) {
      const menu = document.getElementById('activity-page-template-menu');
      if (menu) {
        menu.scrollTop = 0;
      }
    }
  });

  const thisSectorKey = searchParams.get(SECTOR_PARAM);
  // TODO: Verify that these checks are working as intended
  if (!thisSectorKey) {
    return <ErrorPage message={`URL missing search param: ${SECTOR_PARAM}`} />
  }

  const thisSectorAreaKey = searchParams.get(SECTOR_AREA_PARAM);
  if (!thisSectorAreaKey) {
    return <ErrorPage message={`URL missing search param: ${SECTOR_AREA_PARAM}`} />
  }
  const navButtonSelectedParam = searchParams.get(SELECTED_ACTIVITY_PARAM);
  if (navButtonSelectedParam) {
    navButtonSelected = Number(navButtonSelectedParam);
  }

  const thisSector = MASTER_SECTOR_MAP[thisSectorKey];
  const thisSectorArea = thisSector.map[thisSectorAreaKey];

  const content =
    <div className='sector-area-page-template-container'>
      <div className='sector-area-page-template-nav-container'>
        <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => setMenuExpanded(!menuExpanded)}>
          <p className='sector-area-page-template-instructions'>
            Select the activity you are undertaking:
          </p>
          <div className='sector-area-page-template-dropdown'>
            <ArrowDropDownIcon sx={{ fontSize: 40, color: '#fe8200' }} />
          </div>
        </div>
        <div id='sector-area-page-template-menu' className={`sector-area-page-template-menu ${menuExpanded ? 'sector-area-menu-expanded' : ''}`}>
          {thisSectorArea.activities.map((activity, i) => (
            <Link key={i} to={getURL(thisSectorKey, thisSectorAreaKey, activity, i)} className='non-underlined-link' onClick={() => setMenuExpanded(false)}>
              <div className={`nav-button-card sector-area-page-template-nav-button ${navButtonSelected === i ? 'sector-area-page-template-nav-button-selected' : ''}`}>
                <p>{activity.activityTitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={`sector-area-page-template-content-box ${navButtonSelected === -1 ? 'sector-area-page-template-content-box-empty' : ''}`} onClick={() => setMenuExpanded(false)}>
        {navButtonSelected === -1 && (
          <p>Please select an activity</p>
        )}
        <Outlet />
      </div>
    </div >;

  return (
    <BasicPage
      title={thisSectorArea.pageTitle}
      content={content}
    />
  );
}
