import { Link } from "react-router-dom";

export function IncreasingEquitableAccess() {
  return (
    <div className='padding-10'>
      <h1 className='h1-smaller'>Increasing Equitable Access to Inputs/Services</h1>
      <table>
        <thead>
          <tr>
            <th>Potential Nutrition Intervention</th>
            <th>Food Environment Domains Affected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to='/interventions/2'>
                Increase access to seeds of nutrient-rich and biofortified crops so that nutrient-rich foods can be produced
              </Link>
            </td>
            <td>Availability, Women's empowerment</td>
          </tr>
          <tr>
            <td>
              <Link to='/interventions/3'>
                Increase access to safe storage containers and bags to decrease the risk of spoilage of production
              </Link>
            </td>
            <td>Availability, accessibility, Women's empowerment</td>
          </tr>
          <tr>
            <td>
              <Link to='/interventions/2'>
                Increase access to inputs that will increase yield of nutrient-rich commodities
              </Link>
            </td>
            <td>Availability, accessibility, Women's empowerment</td>
          </tr>
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