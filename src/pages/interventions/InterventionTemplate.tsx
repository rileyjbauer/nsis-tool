import { Link, useParams } from 'react-router-dom';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { ErrorElement } from '../../components/ErrorElement';
import GenderIntegrations from '../../data/gender-integrations.json';
import Interventions from '../../data/interventions.json';
import './InterventionTemplate.css';

type Intervention = {
  id: number;
  title: string;
  rationale?: string;
  operationalizing?: string;
  stepsForOperationalizing: string[];
  relatedInterventionIds: number[];
  relatedGenderIntegrationIds: number[];
  foodEnvironmentDomainsAffected: string[];
}

interface IdAndTitle {
  id: number;
  title: string;
}

export function InterventionTemplate() {
  const params = useParams();
  const interventionID = Number(params.interventionId);

  // Find the specified intervention in the data file
  const thisIntervention: Intervention | undefined =
    Interventions.interventions.find(intervention => intervention.id === interventionID);

  if (!thisIntervention) {
    return (
      <ErrorElement message={`Error: Unable to find intervention with ID: ${interventionID}`} />
    );
  }

  // Map the related interventions to their title
  const relatedInterventions = Interventions.interventions.reduce<IdAndTitle[]>((prev, current) => {
    if (thisIntervention.relatedInterventionIds.includes(current.id)) {
      prev.push({ id: current.id, title: current.title });
    }
    return prev;
  }, []);

  const content =
    <div className='intervention-template-container'>
      <h2>Suggested Nutrition-Sensitive Intervention</h2>
      <h3 className='intervention-heading'>
        {`#${thisIntervention.id}: ${thisIntervention.title}`}
      </h3>
      {thisIntervention.rationale && (
        <div>
          <h4>Rationale</h4>
          <p>{thisIntervention.rationale}</p>
        </div>)}
      {thisIntervention.operationalizing && (
        <div>
          <h4>Operationalizing</h4>
          <p>{thisIntervention.operationalizing}</p>
        </div>)}
      {thisIntervention.stepsForOperationalizing.length > 0 && (
        <div>
          <h4>Steps for Operationalizing</h4>
          <ol>
            {thisIntervention.stepsForOperationalizing.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </div>)}
      {thisIntervention.relatedGenderIntegrationIds.length > 0 && (
        <div>
          <h4>Important Gender Integrations</h4>
          <ul>
            {thisIntervention.relatedGenderIntegrationIds.map(
              (id, i) =>
                <li key={i}>
                  <Link to={`/genderIntegrations/${id}`}>
                    {`#${id}: ${GenderIntegrations.genderIntegrations.find((genderIntegration) => genderIntegration.id === id)?.integration}`}
                  </Link>
                </li>)}
          </ul>
        </div>)}
      {relatedInterventions.length > 0 && (
        <div>
          <h4>Related Nutrition Interventions</h4>
          <ul>
            {relatedInterventions.map(
              (relatedIntervention, i) =>
                <li key={i}>
                  <Link to={`/interventions/${relatedIntervention.id}`}>
                    {`#${relatedIntervention.id}: ${relatedIntervention.title}`}
                  </Link>
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