import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import Interventions from '../../interventions.json';
import './List.css';

export function InterventionsList() {
  const content =
    <div>
      {Interventions.interventions.map((intervention, i) => {
        if (intervention.title) {
          return (
            <div key={i}>
              <span className='list-row'>
                <Link to={`/interventions/${intervention.id}`}>
                  {`#${intervention.id}`}
                </Link>
                <div className='title'>{intervention.title}</div>
              </span>
              <hr />
            </div>
          );
        }
        return <div key={i} />;
      })}
    </div>
  return (
    <BasicPage
      title="All Nutrition Interventions"
      content={content}
    />
  );
}
