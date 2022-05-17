import { Link, useParams } from 'react-router-dom';
import { AddToCartFab } from '../../components/addToCartFab/AddToCartFab';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { ErrorElement } from '../../components/ErrorElement';
import GenderIntegrations from '../../data/gender-integrations.json';
import NutritionInterventions from '../../data/interventions.json';
import './GenderIntegrationTemplate.css';

export type GenderIntegration = {
  id: number;
  integration: string;
  keyConsiderations: string[];
  transformative: string;
}

interface IdAndTitle {
  id: number;
  title: string;
}

export function GenderIntegrationTemplate() {
  const params = useParams();
  const genderIntegrationId = Number(params.genderIntegrationId);

  // Find the specified integration in the data file
  const thisIntegration: GenderIntegration | undefined =
    GenderIntegrations.genderIntegrations.find(integration => integration.id === genderIntegrationId);

  if (!thisIntegration) {
    return (
      <ErrorElement message={`Error: Unable to find gender integration with ID: ${genderIntegrationId}`} />
    );
  }

  // Map the related interventions to their title
  const relatedInterventions = NutritionInterventions.interventions.reduce<IdAndTitle[]>((prev, current) => {
    if (current.relatedGenderIntegrationIds.includes(genderIntegrationId)) {
      prev.push({ id: current.id, title: current.title });
    }
    return prev;
  }, []);

  const content =
    <div className='integration-template-container'>

      <AddToCartFab genderIntegration={thisIntegration} />

      <h2>Suggested Gender Integration</h2>
      <h3 className='integration-heading'>
        {`#${thisIntegration.id}: ${thisIntegration.integration}`}
      </h3>
      {thisIntegration.keyConsiderations.length > 0 && (
        <div>
          <h4>Key Considerations</h4>
          <ol>
            {thisIntegration.keyConsiderations.map((consideration, i) => <li key={i}>{consideration}</li>)}
          </ol>
        </div>)}
      {thisIntegration.transformative && (
        <div>
          <h4>Transformative</h4>
          <p>{thisIntegration.transformative}</p>
        </div>)}
      {relatedInterventions.length > 0 && (
        <div>
          <h4>Relevant Nutrition Interventions</h4>
          <ul className='integration-template-related-ul'>
            {relatedInterventions.map(
              (relatedIntervention, i) =>
                <li key={i} className='integration-template-related-li'>
                  <Link to={`/interventions/${relatedIntervention.id}`}>
                    {`#${relatedIntervention.id}:`}
                  </Link>
                  <p className='no-top-margin'>{relatedIntervention.title}</p>
                </li>)}
          </ul>
        </div>)}
    </div>
  return (
    <BasicPage
      title=""
      content={content}
    />
  );
}