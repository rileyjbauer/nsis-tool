import PrintIcon from '@mui/icons-material/Print';
import { useSearchParams } from 'react-router-dom';
import { getRelatedIntegrationIdsFromInterventionId } from '../../Utils';
import { GenderIntegrationCore } from '../genderIntegrations/GenderIntegrationTemplate';
import { InterventionCore } from '../interventions/InterventionTemplate';
import './Print.css';

const PRINT_PARAMS = {
  nutritionInterventionIds: 'nutritionInterventionIds',
  genderIntegrationIds: 'genderIntegrationIds',
};

interface PrintProps {
  nutritionInterventionIds: number[];
  genderIntegrationIds: number[];
}

export function makePrintQueryString(props: PrintProps): string {
  const params = new URLSearchParams();

  params.append(PRINT_PARAMS.nutritionInterventionIds, props.nutritionInterventionIds.toString());

  params.append(PRINT_PARAMS.genderIntegrationIds, props.genderIntegrationIds.toString());

  return params.toString();
}

type DisplayInterventionAndRelatedIds = {
  interventionId: number;
  includedRelatedIntegrationIds: number[];
}

export function Print(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  // IDs of nutrition interventions to be printed
  const interventionIdParam = searchParams.get(PRINT_PARAMS.nutritionInterventionIds);
  const nutritionInterventionIds =
    interventionIdParam && interventionIdParam.length > 0
      ? interventionIdParam.split(',')
        .map((id) => Number(id))
      : [];

  // IDs of gender integrations to be printed
  // TODO: is this casting strings to numbers?
  const genderIntegrationIdSet = new Set<number>();
  const integrationParam = searchParams.get(PRINT_PARAMS.genderIntegrationIds);
  if (integrationParam && integrationParam.length > 0) {
    integrationParam.split(',').forEach(
      (id) => genderIntegrationIdSet.add(Number(id)));
  }

  // Gender Integrations that will be listed WITH nutrition interventions
  // and therefore do NOT need to be listed separately at the bottom of
  // the document
  const relatedGenderIntegrationIds = [] as number[];

  const displayInterventions = [] as DisplayInterventionAndRelatedIds[];

  nutritionInterventionIds.forEach((id) => {
    const includedRelatedIntegrationIds = getRelatedIntegrationIdsFromInterventionId(id)
      .filter((id) => genderIntegrationIdSet.has(id));

    includedRelatedIntegrationIds.forEach((id) => relatedGenderIntegrationIds.push(id));

    displayInterventions.push({
      interventionId: id,
      includedRelatedIntegrationIds: includedRelatedIntegrationIds,
    });
  });

  // Remove all gender integrations that are associated with selected nutrition
  // interventions so the remaining gender integrations can be listed separately
  relatedGenderIntegrationIds.forEach((id) => genderIntegrationIdSet.delete(id))

  return (
    <div className='print-document-container'>
      <button className='floating-button' onClick={window.print}>
        <PrintIcon />
      </button>
      {nutritionInterventionIds.length > 0 && (
        <>
          <h1>Nutrition-Sensitive Interventions</h1>
          {displayInterventions.map(
            (displayIntervention) => {
              return (
                <div key={displayIntervention.interventionId}>
                  <h2>Nutrition-Sensitive Intervention</h2>
                  <InterventionCore nutritionInterventionId={displayIntervention.interventionId} />
                  {displayIntervention.includedRelatedIntegrationIds.length > 0 && (
                    <>
                      <h3>Important Related Gender Integrations</h3>
                      {displayIntervention.includedRelatedIntegrationIds.map(
                        (id) => <GenderIntegrationCore genderIntegrationId={id} key={id} />
                      )}
                    </>
                  )}
                </div>
              )
            }
          )}
        </>
      )}
      {genderIntegrationIdSet.size > 0 && (
        <>
          <h1>Gender Integrations</h1>
          {Array.from(genderIntegrationIdSet).map(
            (id) => {
              return (
                <div key={id}>
                  <h2>Gender Integration</h2>
                  <GenderIntegrationCore genderIntegrationId={id} />
                </div>
              );
            }
          )}
        </>
      )}
    </div>
  );
}