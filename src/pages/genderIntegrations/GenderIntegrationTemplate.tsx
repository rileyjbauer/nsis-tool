import { Link, useParams } from 'react-router-dom';
import { AddToCartFab } from '../../components/addToCartFab/AddToCartFab';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { ErrorElement } from '../../components/errorElement/ErrorElement';
import GenderIntegrations from '../../data/gender-integrations.json';
import NutritionInterventions from '../../data/interventions.json';
import { ErrorPage } from '../errorPage/ErrorPage';
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

interface GenderIntegrationCoreProps {
  genderIntegration?: GenderIntegration;
  genderIntegrationId?: number;
}

export function GenderIntegrationCore(props: GenderIntegrationCoreProps): JSX.Element {
  let thisGenderIntegration: GenderIntegration | undefined;
  if (props.genderIntegration) {
    thisGenderIntegration = props.genderIntegration;
  } else if (props.genderIntegrationId) {
    thisGenderIntegration = GenderIntegrations.genderIntegrations.find((integration) => integration.id === props.genderIntegrationId);
  }
  if (thisGenderIntegration === undefined) {
    return <ErrorElement message={`No gender integration found with id: ${props.genderIntegrationId}`} />
  }

  return (
    <div>
      <h3 className='integration-heading'>
        {`#${thisGenderIntegration.id}: ${thisGenderIntegration.integration}`}
      </h3>
      {thisGenderIntegration.keyConsiderations.length > 0 && (
        <div>
          <h4>Key Considerations</h4>
          <ol>
            {thisGenderIntegration.keyConsiderations.map((consideration, i) => <li key={i}>{consideration}</li>)}
          </ol>
        </div>)}
      {thisGenderIntegration.transformative && (
        <div>
          <h4>Transformative</h4>
          <p>{thisGenderIntegration.transformative}</p>
        </div>)}
    </div>
  );
}

export function GenderIntegrationTemplate(): JSX.Element {
  const params = useParams();
  const genderIntegrationId = Number(params.genderIntegrationId);

  // Find the specified integration in the data file
  const thisIntegration: GenderIntegration | undefined =
    GenderIntegrations.genderIntegrations.find(integration => integration.id === genderIntegrationId);

  if (!thisIntegration) {
    return (
      <ErrorPage message={`Unable to find gender integration with ID: ${genderIntegrationId}`} />
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

      <GenderIntegrationCore genderIntegration={thisIntegration} />

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