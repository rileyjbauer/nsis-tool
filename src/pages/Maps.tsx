import { ActivityTemplateProps } from "./ActivityPageTemplate"

// Typescript doesn't reverse-map string enums, so we're going with this instead for now.
// Probably it would be better to use strings in the future with our own reverse-mapping
// to verify whether or not a string is actually in this enum.
// https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings 
export const PRODUCTION_ACTIVITIES = {
  AGRO_INPUT_SUPPLY: 'agro_input_supply',
  PRODUCER_FARMER_ORGANIZATION_DEVELOPMENT: 'producer_farmer_organization_development',
  FARM_AND_HOUSEHOLD_TRAINING: 'farm_and_household_training',
  VALUE_CHAIN_SELECTION: 'value_chain_selection',
}

export const PRODUCTION_PAGE_MAP: { [key: string]: ActivityTemplateProps } = {
  [PRODUCTION_ACTIVITIES.AGRO_INPUT_SUPPLY]: {
    activities: [
      {
        activityTitle: 'Increasing Equitable Access to Inputs/Services',
        interventionIds: [2, 3, 4]
      },
      {
        activityTitle: 'Capacity Development of Input/Service Delivery Actors',
        interventionIds: [5, 6, 7]
      },
    ],
    pageTitle: 'Agro-Input Supply and Service Delivery',
    navBackwardPath: 'production',
  },
  [PRODUCTION_ACTIVITIES.PRODUCER_FARMER_ORGANIZATION_DEVELOPMENT]: {
    activities: [
      {
        activityTitle: 'Marketing/Offtake Development',
        interventionIds: [8, 9, 10]
      },
      {
        activityTitle: 'Diversification Of Operations/Service Offerings',
        interventionIds: [11, 12]
      },
      {
        activityTitle: 'Development Of Storage Facilities',
        interventionIds: [13, 14]
      },
      {
        activityTitle: 'Producer Organization Member Training',
        interventionIds: [15]
      },
      {
        activityTitle: 'Women\'s Meaningful Participation In Producer Organization',
        interventionIds: [16, 17]
      },
    ],
    pageTitle: 'Producer/Farmer Organization Development',
    navBackwardPath: 'production',
  },
  [PRODUCTION_ACTIVITIES.FARM_AND_HOUSEHOLD_TRAINING]: {
    activities: [
      {
        activityTitle: 'Farm/HH Access To Inputs And Services',
        interventionIds: [18, 19]
      },
      {
        activityTitle: 'Training On Good Agricultural Practices',
        interventionIds: [20, 21]
      },
      {
        activityTitle: 'Training On Household-level Processing',
        interventionIds: [22]
      },
    ],
    pageTitle: 'Farm/Household Training on Agriculture',
    navBackwardPath: 'production',
  },
  [PRODUCTION_ACTIVITIES.VALUE_CHAIN_SELECTION]: {
    activities: [
      {
        activityTitle: 'Value Chain Selection',
        interventionIds: [1]
      },
    ],
    pageTitle: 'Value Chain Selection',
    navBackwardPath: 'production',
  }
}

// ---------------------------------------------------------------------

// Typescript doesn't reverse-map string enums, so we're going with this instead for now.
// Probably it would be better to use strings in the future with our own reverse-mapping
// to verify whether or not a string is actually in this enum.
// https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings 
export const FOOD_TRADE_ACTIVITIES = {
  FOOD_COMMODITY_STORAGE: 'food_commodity_storage',
  MARKETING_DISTRIBUTION_OF_COMMODITIES: 'marketing_distribution_of_commodities',
  FOOD_SAFETY: 'food_safety',
}

export const FOOD_TRADE_PAGE_MAP: { [key: string]: ActivityTemplateProps } = {
  [FOOD_TRADE_ACTIVITIES.FOOD_COMMODITY_STORAGE]: {
    activities: [
      {
        activityTitle: 'Market-level Or Producer Organization-level Storage Facilities Developed',
        interventionIds: [23]
      },
      {
        activityTitle: 'Household-level Storage Capacities Enhanced',
        interventionIds: [24, 25]
      },
    ],
    pageTitle: 'Food Commodity Storage',
    navBackwardPath: 'foodTradeAndMarketing',
  },
  [FOOD_TRADE_ACTIVITIES.MARKETING_DISTRIBUTION_OF_COMMODITIES]: {
    activities: [
      {
        activityTitle: 'Farm-level Marketing/Offtake Enhanced',
        interventionIds: [8, 47, 27]
      },
      {
        activityTitle: 'Trade Of Foods (Inside And Outside The Implementation Area)',
        interventionIds: [28]
      },
      {
        activityTitle: 'Food Processors And Retailers\' Marketing Strategies Developed',
        interventionIds: [29]
      },
    ],
    pageTitle: 'Marketing/Distribution Of Commodities',
    navBackwardPath: 'foodTradeAndMarketing',
  },
  [FOOD_TRADE_ACTIVITIES.FOOD_SAFETY]: {
    activities: [
      {
        activityTitle: 'Food Safety, Sanitation, And Hygiene Is Enhanced Along Food Distribution',
        interventionIds: [31, 32]
      },
    ],
    pageTitle: 'Food Safety In Food Storage, Transport, And Trade',
    navBackwardPath: 'foodTradeAndMarketing',
  },
}

// ---------------------------------------------------------------------

export const FOOD_PROCESSING_ACTIVITIES = {
  FARM_AND_HOUSEHOLD_TRAINING_ON_FOOD_PROCESSING: 'farm_and_household_training_on_food_processing',
  COMMERCIAL_TRAINING_ON_FOOD_PROCESSING: 'commercial_training_on_food_processing',
  CONSUMER_MARKETING_BY_FOOD_PROCESSORS: 'consumer_marketing_by_food_processors',
  MARKETING_AND_DISTRIBUTION_OF_COMMODITIES: 'marketing_and_distribution_of_commodities'
}

export const FOOD_PROCESSING_PAGE_MAP: { [key: string]: ActivityTemplateProps } = {
  [FOOD_PROCESSING_ACTIVITIES.FARM_AND_HOUSEHOLD_TRAINING_ON_FOOD_PROCESSING]: {
    activities: [
      {
        activityTitle: 'Training On Household-level Processing',
        interventionIds: [33]
      },
    ],
    pageTitle: 'Farm/Household Training On Food Processing',
    navBackwardPath: 'foodProcessing',
  },
  [FOOD_PROCESSING_ACTIVITIES.COMMERCIAL_TRAINING_ON_FOOD_PROCESSING]: {
    activities: [
      {
        activityTitle: 'Diversification Of Processors\' Products',
        interventionIds: [34, 35, 36, 37, 38, 39]
      },
      {
        activityTitle: 'Food Safety Enhanced In Food Processing',
        interventionIds: [41, 42]
      },
      {
        activityTitle: 'Product Packaging Enhanced',
        interventionIds: [43, 44, 45]
      },
    ],
    pageTitle: 'Commercial Training On Food Processing',
    navBackwardPath: 'foodProcessing',
  },
  [FOOD_PROCESSING_ACTIVITIES.CONSUMER_MARKETING_BY_FOOD_PROCESSORS]: {
    activities: [
      {
        activityTitle: 'Consumer Marketing Capacities Of Processors Developed',
        interventionIds: [48]
      },
    ],
    pageTitle: 'Consumer Marketing By Food Processors',
    navBackwardPath: 'foodProcessing',
  },
  [FOOD_PROCESSING_ACTIVITIES.MARKETING_AND_DISTRIBUTION_OF_COMMODITIES]: {
    activities: [
      {
        activityTitle: 'Food Processors And Retailers\' Marketing Strategies Developed',
        interventionIds: [29]
      },
    ],
    pageTitle: 'Marketing/Distribution Of Commodities By Food Processors',
    navBackwardPath: 'foodProcessing',
  },
}

export const SECTORS = {
  PRODUCTION: 'production',
  FOOD_TRADE_AND_MARKETING: 'food_trade_and_marketing',
  FOOD_PROCESSING: 'food_processing',
  FOOD_RETAILING: 'food_retailing',
  CONSUMER_DEMAND: 'consumer_demand',
  ENABLING_ENVIRONMENT: 'enabling_environment'
}

export const SECTOR_MAP: { [key: string]: { [key: string]: ActivityTemplateProps } } = {
  [SECTORS.PRODUCTION]: PRODUCTION_PAGE_MAP,
  [SECTORS.FOOD_TRADE_AND_MARKETING]: FOOD_TRADE_PAGE_MAP,
  [SECTORS.FOOD_PROCESSING]: FOOD_PROCESSING_PAGE_MAP,
};
