import { Link } from 'react-router-dom';
import { BasicPage } from '../components/BasicPage';
import Interventions from '../interventions.json';
import './InterventionsList.css';

export function InterventionsList() {
  const content =
    <div>
      {Interventions.interventions.map((intervention, i) => {
        if (intervention.title) {
          return (
            <div key={i}>
              <span className='intervention-row'>
                <Link to={`/interventions/${intervention.id}`}>{`#${intervention.id}`}</Link>
                <div className='intervention'>{intervention.title}</div>
              </span>
              <hr />
            </div>
          );
        }
      })}
    </div>
  return (
    <BasicPage
      title="All Nutrition Interventions"
      content={content}
    />
  );
}
