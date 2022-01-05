import { Link, useSearchParams } from "react-router-dom";
import Interventions from '../interventions.json';
import { ErrorElement } from "./ErrorElement";

const DRILL_DOWN_PARAMS = {
  ids: 'ids',
  pageTitle: 'title'
};

export function getURL(ids: number[], title: string) {
  return 'drillDown?' + makeQueryString(ids, title);
}

function makeQueryString(ids: number[], title: string): string {
  const params = new URLSearchParams();
  ids.forEach((id) => {
    params.append(DRILL_DOWN_PARAMS.ids, String(id));
  });

  params.append(DRILL_DOWN_PARAMS.pageTitle, title);
  return params.toString();
}

export function DrillDownTemplate() {
  const [searchParams, setSearchParams] = useSearchParams();
  const interventionIds = searchParams.getAll(DRILL_DOWN_PARAMS.ids).map((id) => Number(id));
  const pageTitle = searchParams.get(DRILL_DOWN_PARAMS.pageTitle);

  if (pageTitle === null) {
    return <ErrorElement message={`Error: No page title provided in search params`} />;
  }

  const relevantInterventions =
    Interventions.interventions.filter((intervention) => interventionIds.includes(intervention.id));

  return (
    <div className='padding-10'>
      <h1 className='h1-smaller'>{pageTitle}</h1>
      <table>
        <thead>
          <tr>
            <th>Potential Nutrition Intervention</th>
            <th>Food Environment Domains Affected</th>
          </tr>
        </thead>
        <tbody>
          {relevantInterventions.map((intervention, i) =>
          (
            <tr key={i}>
              <td>
                <Link to={`/interventions/${intervention.id}`}>
                  {intervention.title}
                </Link>
              </td>
              <td>{intervention.foodEnvironmentDomainsAffected.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Gender Integration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ensuring women have equitable access to inputs/ technology will support closing gender gaps in productivity and boost overall agricultural and nutrition outcomes.</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}