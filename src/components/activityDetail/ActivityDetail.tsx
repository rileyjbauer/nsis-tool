import { Link, useSearchParams } from 'react-router-dom';
import GenderIntegrations from '../../data/gender-integrations.json';
import Interventions from '../../data/interventions.json';
import { Activity } from '../../pages/sectorAreaPageTemplate/SectorAreaPageTemplate';
import { ErrorElement } from '../ErrorElement';
import './ActivityDetail.css';

const ACTIVITY_DETAIL_PARAMS = {
  interventionIds: 'interventionIds',
  pageTitle: 'title',
  genderIntegrationIds: 'genderIntegrationIds',
};

export function makeActivityDetailQueryString(activity: Activity): URLSearchParams {
  const params = new URLSearchParams();
  activity.interventionIds.forEach((id) => {
    params.append(ACTIVITY_DETAIL_PARAMS.interventionIds, String(id));
  });

  activity.genderIntegrationIds.forEach((id) => {
    params.append(ACTIVITY_DETAIL_PARAMS.genderIntegrationIds, String(id));
  });

  params.append(ACTIVITY_DETAIL_PARAMS.pageTitle, activity.activityTitle);
  return params;
}

export function ActivityDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const interventionIds = searchParams.getAll(ACTIVITY_DETAIL_PARAMS.interventionIds).map((id) => Number(id));
  const genderIntegrationIds = searchParams.getAll(ACTIVITY_DETAIL_PARAMS.genderIntegrationIds).map((id) => Number(id));
  const pageTitle = searchParams.get(ACTIVITY_DETAIL_PARAMS.pageTitle);

  if (pageTitle === null) {
    return <ErrorElement message={`Error: No page title provided in search params`} />;
  }

  const interventions =
    Interventions.interventions.filter((intervention) => interventionIds.includes(intervention.id));

  const genderIntegrations =
    GenderIntegrations.genderIntegrations.filter((genderIntegrations) => genderIntegrationIds.includes(genderIntegrations.id));

  return (
    <div>
      <h1 className='h1-smaller'>{pageTitle}</h1>
      <table className='activity-detail-table'>
        <thead>
          <tr>
            <th>Potential Nutrition Intervention</th>
            <th>Food Environment Domains Affected</th>
          </tr>
        </thead>
        <tbody>
          {interventions.map((intervention, i) =>
          (
            <tr key={i}>
              <td>
                <Link className='activity-detail-link' to={`/interventions/${intervention.id}`}>
                  <span className='activity-detail-text'>
                    {intervention.title}
                  </span>
                  <span className='activity-detail-link-text'>
                    (Read more →)
                  </span>
                </Link>
              </td>
              <td>{intervention.foodEnvironmentDomainsAffected.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {genderIntegrations.length > 0 && (
        <table className='activity-detail-table'>
          <thead>
            <tr>
              <th>Gender Integrations</th>
            </tr>
          </thead>
          <tbody>
            {genderIntegrations.map((genderIntegration, i) =>
            (
              <tr key={i}>
                <td>
                  <Link to={`/genderIntegrations/${genderIntegration.id}`} className='activity-detail-link'>
                    <span className='activity-detail-text'>
                      {genderIntegration.integration}
                    </span>
                    <span className='activity-detail-link-text'>
                      (Read more →)
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}