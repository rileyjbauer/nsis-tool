import React from 'react';
import Interventions from './interventions.json';
import GenderIntegrations from './gender-integrations.json';
import { MASTER_SECTOR_MAP } from './SectorMaps';
import { Activity } from './pages/ActivityPageTemplate';

const allInterventionIds = new Map<number, boolean>();
Interventions.interventions.forEach(
  (intervention) => allInterventionIds.set(intervention.id, true)
);

const allGenderIntegrationIds = new Map<number, boolean>();
GenderIntegrations.genderIntegrations.forEach((integration) => allGenderIntegrationIds.set(integration.id, true));

const allSectorPages = Object.values(MASTER_SECTOR_MAP);
const allSectorMaps = allSectorPages.map(page => page.map);
const allActivityTemplateProps =
  allSectorMaps.map(
    pageMaps => Object.values(pageMaps)
  ).flat();
const allActivities = allActivityTemplateProps.reduce(
  (prev, currActivityProps) => prev.concat(currActivityProps.activities),
  [] as Activity[]
);

declare global {
  namespace jest {
    interface Matchers<R> {
      toLinkToValidIntervention(referencer: number | string): R;
      toLinkToValidGenderIntegration(referencer: number | string): R;
    }
  }
}

expect.extend({
  toLinkToValidIntervention(received, referencer) {
    const pass = allInterventionIds.has(received);
    return {
      pass,
      message: () =>
        `${referencer} referenced intervention with ID: ${received} which does not exist`,
    };
  },
  toLinkToValidGenderIntegration(received, referencer) {
    const pass = allGenderIntegrationIds.has(received);
    return {
      pass,
      message: () =>
        `${referencer} referenced gender integration with ID: ${received} which does not exist`,
    };
  },
});

test.each(Interventions.interventions)('Intervention with ID: $id has valid references to other interventions', ({ id, relatedInterventionIds }) => {
  relatedInterventionIds.forEach((relatedId) => {
    expect(relatedId).toLinkToValidIntervention(`Intervention with ID: ${id}`);
  });
});

test.each(allActivities)('Activity with title \'$activityTitle\' has valid references to interventions', ({ activityTitle, interventionIds }) => {
  interventionIds.forEach((relatedId) => {
    expect(relatedId).toLinkToValidIntervention(`Activity: '${activityTitle}'`);
  });
});

test.each(allActivities)('Activity with title \'$activityTitle\' has valid references to gender integrations', ({ activityTitle, genderIntegrationIds }) => {
  genderIntegrationIds.forEach((relatedId) => {
    expect(relatedId).toLinkToValidGenderIntegration(`Activity: '${activityTitle}'`);
  });
});