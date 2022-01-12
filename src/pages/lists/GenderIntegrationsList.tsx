import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import GenderIntegrations from '../../gender-integrations.json';
import './List.css';

export function GenderIntegrationsList() {
  const content =
    <div>
      {GenderIntegrations.genderIntegrations.map((genderIntegration, i) => {
        if (genderIntegration.integration) {
          return (
            <div key={i}>
              <span className='list-row'>
                <Link to={`/genderIntegrations/${genderIntegration.id}`}>
                  {`#${genderIntegration.id}`}
                </Link>
                <div className='title'>{genderIntegration.integration}</div>
              </span>
              <hr />
            </div>
          );
        }
      })}
    </div>
  return (
    <BasicPage
      title="All Gender Integrations"
      content={content}
    />
  );
}
