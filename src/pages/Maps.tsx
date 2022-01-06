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

// ---------------------------------------------------------------------

export const FOOD_RETAILING_ACTIVITIES = {
  LOCATION_OF_FOOD_RETAILING: 'location_of_food_retailing',
  SOCIAL_MARKETING_BY_VENDORS: 'social_marketing_by_vendors',
  PRODUCT_CHARACTERISTICS: 'product_characteristics',
  GOOD_GOVERNANCE_AT_MARKETS: 'good_governance_at_markets'
}

export const FOOD_RETAILING_PAGE_MAP: { [key: string]: ActivityTemplateProps } = {
  [FOOD_RETAILING_ACTIVITIES.LOCATION_OF_FOOD_RETAILING]: {
    activities: [
      {
        activityTitle: 'Development Of New Retail Locations For Nutrient-rich Foods',
        interventionIds: [49]
      },
      {
        activityTitle: 'Local Market Infrastructure Development',
        interventionIds: [50, 51]
      },
    ],
    pageTitle: 'Location Of Food Retailing',
    navBackwardPath: 'foodRetailing',
  },
  [FOOD_RETAILING_ACTIVITIES.SOCIAL_MARKETING_BY_VENDORS]: {
    activities: [
      {
        activityTitle: 'Vendors\' Consumer Marketing Capacities Developed',
        interventionIds: [52]
      },
    ],
    pageTitle: 'Social Marketing By Vendors',
    navBackwardPath: 'foodRetailing',
  },
  [FOOD_RETAILING_ACTIVITIES.PRODUCT_CHARACTERISTICS]: {
    activities: [
      {
        activityTitle: 'Product Sizes Optimized',
        interventionIds: [54, 55]
      },
      {
        activityTitle: 'Food Safety, Sanitation, And Hygiene Considerations Integrated In Food Retailing',
        interventionIds: [56, 57, 58]
      },
    ],
    pageTitle: 'Product Characteristics',
    navBackwardPath: 'foodRetailing',
  },
  [FOOD_RETAILING_ACTIVITIES.GOOD_GOVERNANCE_AT_MARKETS]: {
    activities: [
      {
        activityTitle: 'Food Safety, Sanitation, And Hygiene Considerations Integrated In Food Retailing',
        interventionIds: [59, 60]
      },
      {
        activityTitle: 'Consumer Marketing At Markets Enhanced',
        interventionIds: [62]
      },
      {
        activityTitle: 'Improvements In Policies And Processes',
        interventionIds: [63]
      },
    ],
    pageTitle: 'Good Governance At Markets',
    navBackwardPath: 'foodRetailing',
  },
}

// ---------------------------------------------------------------------

export const CONSUMER_DEMAND_ACTIVITIES = {
  INTEGRATION_OF_NUTRITION_MESSAGING: 'integration_of_nutrition_messaging',
  ENGAGEMENT_OF_INFLUENCERS_TO_IMPROVE_CONSUMER_BEHAVIORS: 'engagement_of_influencers_to_improve_consumer_behaviors',
  STANDALONE_TRAININGS_TO_CONSUMERS: 'standalone_trainings_to_consumers',
  PRIVATE_SECTOR_MARKETING_FOR_NUTRITION: 'private_sector_marketing_for_nutrition'
}

export const CONSUMER_DEMAND_PAGE_MAP: { [key: string]: ActivityTemplateProps } = {
  [CONSUMER_DEMAND_ACTIVITIES.INTEGRATION_OF_NUTRITION_MESSAGING]: {
    activities: [
      {
        activityTitle: 'Private Sector Engagement For Nutrition',
        interventionIds: [64]
      },
      {
        activityTitle: 'Integration Into Project-implemented Trainings And Activities',
        interventionIds: [65]
      },
      {
        activityTitle: 'Integration Into ICT And Other Communication Activities',
        interventionIds: [66]
      },
    ],
    pageTitle: 'Integration Of Nutrition Messaging Into Existing Program Activities',
    navBackwardPath: 'consumerDemand',
  },
  [CONSUMER_DEMAND_ACTIVITIES.ENGAGEMENT_OF_INFLUENCERS_TO_IMPROVE_CONSUMER_BEHAVIORS]: {
    activities: [
      {
        activityTitle: 'Integration Into Community Health Worker Services',
        interventionIds: [69]
      },
      {
        activityTitle: 'Integration Into Religious Leader Services',
        interventionIds: [70]
      },
      {
        activityTitle: 'Cooking Demonstrations By Community Influencers',
        interventionIds: [71]
      },
    ],
    pageTitle: 'Engagement Of Community Influencers To Improve Consumer Behaviors',
    navBackwardPath: 'consumerDemand',
  },
  [CONSUMER_DEMAND_ACTIVITIES.STANDALONE_TRAININGS_TO_CONSUMERS]: {
    activities: [
      {
        activityTitle: 'Product Sizes Optimized',
        interventionIds: [67]
      },
      {
        activityTitle: 'Household Budgeting Training',
        interventionIds: [19]
      },
    ],
    pageTitle: 'Standalone Trainings To Consumers/Program Participants',
    navBackwardPath: 'consumerDemand',
  },
  [CONSUMER_DEMAND_ACTIVITIES.PRIVATE_SECTOR_MARKETING_FOR_NUTRITION]: {
    activities: [
      {
        activityTitle: 'Integrate Nutrition Messaging In Input Service Delivery',
        interventionIds: [5]
      },
      {
        activityTitle: 'Integrate Nutrition Messaging In Output Market Development Activities',
        interventionIds: [52]
      },
    ],
    pageTitle: 'Private Sector Marketing For Nutrition',
    navBackwardPath: 'consumerDemand',
  },
}

// ---------------------------------------------------------------------

export const ENABLING_ENVIRONMENT_ACTIVITIES = {
  GOVERNANCE_NUTRITION_SENSITIVE_POLICY_DEVELOPMENT: 'governance_nutrition_sensitive_policy_development',
  GOVERNANCE_PUBLIC_SECTOR_INVOLVEMENT_IN_FOOD_SYSTEM: 'governance_public_sector_involvement_in_food_system',
  BUSINESS_DEVELOPMENT_SERVICES: 'business_development_services',
  ACCESS_TO_FINANCE: 'access_to_finance',
  COMMUNITY_MOBILIZATION: 'community_mobilization'
}

export const ENABLING_ENVIRONMENT_PAGE_MAP: { [key: string]: ActivityTemplateProps } = {
  [ENABLING_ENVIRONMENT_ACTIVITIES.GOVERNANCE_NUTRITION_SENSITIVE_POLICY_DEVELOPMENT]: {
    activities: [
      {
        activityTitle: 'Government Budgeting For Nutrition',
        interventionIds: [74]
      },
      {
        activityTitle: 'Government Planning For Nutrition Integration',
        interventionIds: [75]
      },
      {
        activityTitle: 'Agricultural Policy Supports Production Of Nutrient-rich Foods',
        interventionIds: [76]
      },
      {
        activityTitle: 'Policies Promote Food Safety Along The Food Supply Chain',
        interventionIds: [77]
      },
      {
        activityTitle: 'Other Food Systems Policy Support Market Actors To Transport, Process, And Sell Nutritious Foods',
        interventionIds: [78]
      },
    ],
    pageTitle: 'Governance - Nutrition-sensitive Policy/Framework Development And/Or Implementation',
    navBackwardPath: 'enablingEnvironment',
  },
  [ENABLING_ENVIRONMENT_ACTIVITIES.GOVERNANCE_PUBLIC_SECTOR_INVOLVEMENT_IN_FOOD_SYSTEM]: {
    activities: [
      {
        activityTitle: 'Local Agriculture, Livestock, And/Or Fisheries Officers Or Extension Agents Trained On Nutrition-sensitive Agriculture',
        interventionIds: [79, 80, 81]
      },
      {
        activityTitle: 'Public-private Sector Coordination Throughout The Food System',
        interventionIds: [82, 83]
      },
      {
        activityTitle: 'Public And Private School Meals Provide Nutritious Foods',
        interventionIds: [85]
      },
    ],
    pageTitle: 'Governance - Public Sector Involvement In The Food System',
    navBackwardPath: 'enablingEnvironment',
  },
  [ENABLING_ENVIRONMENT_ACTIVITIES.BUSINESS_DEVELOPMENT_SERVICES]: {
    activities: [
      {
        activityTitle: 'Food System Actors\' Business Capacities Improved',
        interventionIds: [86]
      },
    ],
    pageTitle: 'Business Development Services',
    navBackwardPath: 'enablingEnvironment',
  },
  [ENABLING_ENVIRONMENT_ACTIVITIES.ACCESS_TO_FINANCE]: {
    activities: [
      {
        activityTitle: 'Food System Actors\' Access Financial Services',
        interventionIds: [87, 88]
      },
    ],
    pageTitle: 'Access To Finance',
    navBackwardPath: 'enablingEnvironment',
  },
  [ENABLING_ENVIRONMENT_ACTIVITIES.COMMUNITY_MOBILIZATION]: {
    activities: [
      {
        activityTitle: 'Enhanced Community Mobilization For A Nutritious Food System',
        interventionIds: [89]
      },
    ],
    pageTitle: 'Community Mobilization',
    navBackwardPath: 'enablingEnvironment',
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
  [SECTORS.FOOD_RETAILING]: FOOD_RETAILING_PAGE_MAP,
  [SECTORS.CONSUMER_DEMAND]: CONSUMER_DEMAND_PAGE_MAP,
  [SECTORS.ENABLING_ENVIRONMENT]: ENABLING_ENVIRONMENT_PAGE_MAP,
};
