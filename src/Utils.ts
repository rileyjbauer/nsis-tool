import GenderIntegrations from './data/gender-integrations.json';

export function getGenderIntegrationTitleFromId(id: number): string {
  return GenderIntegrations.genderIntegrations.find((integration) => integration.id === id)?.integration || '';
}