import GenderIntegrations from './data/gender-integrations.json';
import NutritionInterventions from './data/interventions.json';

export function getGenderIntegrationTitleFromId(id: number): string {
  return GenderIntegrations.genderIntegrations.find((integration) => integration.id === id)?.integration || '';
}

export function getRelatedIntegrationIdsFromInterventionId(id: number): number[] {
  const thisIntervention = NutritionInterventions.interventions.find((intervention) => intervention.id === id);

  return thisIntervention ? thisIntervention.relatedGenderIntegrationIds : [];
}