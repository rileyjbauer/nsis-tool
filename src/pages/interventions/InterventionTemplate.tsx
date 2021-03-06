import { Link, useParams } from 'react-router-dom';
import { AddToCartFab } from '../../components/addToCartFab/AddToCartFab';
import { BasicPage } from '../../components/basicPage/BasicPage';
import { ErrorElement } from '../../components/errorElement/ErrorElement';
import Interventions from '../../data/interventions.json';
import { getGenderIntegrationTitleFromId } from '../../Utils';
import { ErrorPage } from '../errorPage/ErrorPage';
import './InterventionTemplate.css';

export type Intervention = {
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

interface InterventionCoreProps {
  nutritionIntervention?: Intervention;
  nutritionInterventionId?: number;
}

export function InterventionCore(props: InterventionCoreProps): JSX.Element {
  let thisIntervention: Intervention | undefined;
  if (props.nutritionIntervention) {
    thisIntervention = props.nutritionIntervention;
  } else if (props.nutritionInterventionId) {
    thisIntervention = Interventions.interventions.find((intervention) => intervention.id === props.nutritionInterventionId);
  }
  if (thisIntervention === undefined) {
    return <ErrorElement message={`No nutrition intervention found with id: ${props.nutritionInterventionId}`} />
  }
  return (
    <div>
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
    </div>
  );
}

export function InterventionTemplate(): JSX.Element {
  const params = useParams();
  const interventionID = Number(params.interventionId);

  // Find the specified intervention in the data file
  const thisIntervention: Intervention | undefined =
    Interventions.interventions.find(intervention => intervention.id === interventionID);

  if (!thisIntervention) {
    return (
      <ErrorPage message={`Unable to find intervention with ID: ${interventionID}`} />
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

      <AddToCartFab nutritionIntervention={thisIntervention} />

      <h2>Suggested Nutrition-Sensitive Intervention</h2>

      <InterventionCore nutritionIntervention={thisIntervention} />

      {thisIntervention.relatedGenderIntegrationIds.length > 0 && (
        <div>
          <h4>Important Gender Integrations</h4>
          <ul className='intervention-template-related-ul'>
            {thisIntervention.relatedGenderIntegrationIds.map(
              (id, i) =>
                <li key={i} className='intervention-template-related-li'>
                  <Link to={`/genderIntegrations/${id}`}>
                    {`#${id}:`}
                  </Link>
                  <p className='no-top-margin'>{getGenderIntegrationTitleFromId(id)}</p>
                </li>)}
          </ul>
        </div>)}
      {relatedInterventions.length > 0 && (
        <div>
          <h4>Related Nutrition Interventions</h4>
          <ul className='intervention-template-related-ul'>
            {relatedInterventions.map(
              (relatedIntervention, i) =>
                <li key={i} className='intervention-template-related-li'>
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