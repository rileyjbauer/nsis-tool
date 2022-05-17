import ConsumerDemandImg from '../img/ConsumerDemand.svg';
import EnablingEnvironmentImg from '../img/EnablingEnvironment.svg';
import FoodProcessingImg from '../img/FoodProcessing.svg';
import FoodRetailingImg from '../img/FoodRetailing.svg';
import FoodTradeAndMarketingImg from '../img/FoodTradeAndMarketing.svg';
import ProductionImg from '../img/Production.svg';
import { SectorAreaTemplateProps } from '../pages/sectorAreaPageTemplate/SectorAreaPageTemplate';

export type SectorMap = { [key: string]: SectorAreaTemplateProps };

type SectorAreas = { [key: string]: string };

export type SectorPage = {
  map: SectorMap;
  header: string;
  title: string;
  sectorAreas: SectorAreas;
  imgSrc: string;
};

// Typescript doesn't reverse-map string enums, so we're going with this instead for now.
// https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings
export const PRODUCTION_AREAS: SectorAreas = {
  AGRO_INPUT_SUPPLY: 'agro_input_supply',
  PRODUCER_FARMER_ORGANIZATION_DEVELOPMENT: 'producer_farmer_organization_development',
  FARM_AND_HOUSEHOLD_TRAINING: 'farm_and_household_training',
  VALUE_CHAIN_SELECTION: 'value_chain_selection',
}

export const PRODUCTION_PAGE_MAP: SectorMap = {
  [PRODUCTION_AREAS.AGRO_INPUT_SUPPLY]: {
    activities: [
      {
        activityTitle: 'Increasing Equitable Access to Inputs/Services',
        interventionIds: [2, 3, 4],
        genderIntegrationIds: [2],
      },
      {
        activityTitle: 'Capacity Development of Input/Service Delivery Actors',
        interventionIds: [5, 6, 7],
        genderIntegrationIds: [3],
      },
    ],
    pageTitle: 'Agro-Input Supply and Service Delivery',
  },
  [PRODUCTION_AREAS.PRODUCER_FARMER_ORGANIZATION_DEVELOPMENT]: {
    activities: [
      {
        activityTitle: 'Marketing/Offtake Development',
        interventionIds: [8, 9, 10],
        genderIntegrationIds: [4],
      },
      {
        activityTitle: 'Diversification Of Operations/Service Offerings',
        interventionIds: [11, 12],
        genderIntegrationIds: [5],
      },
      {
        activityTitle: 'Development Of Storage Facilities',
        interventionIds: [13, 14],
        genderIntegrationIds: [6],
      },
      {
        activityTitle: 'Producer Organization Member Training',
        interventionIds: [15],
        genderIntegrationIds: [7],
      },
      {
        activityTitle: 'Women\'s Meaningful Participation In Producer Organization',
        interventionIds: [16, 17],
        genderIntegrationIds: [8],
      },
    ],
    pageTitle: 'Producer/Farmer Organization Development',
  },
  [PRODUCTION_AREAS.FARM_AND_HOUSEHOLD_TRAINING]: {
    activities: [
      {
        activityTitle: 'Farm/HH Access To Inputs And Services',
        interventionIds: [18, 19],
        genderIntegrationIds: [9],
      },
      {
        activityTitle: 'Training On Good Agricultural Practices',
        interventionIds: [20, 21],
        genderIntegrationIds: [10],
      },
      {
        activityTitle: 'Training On Household-level Processing',
        interventionIds: [22],
        genderIntegrationIds: [11],
      },
    ],
    pageTitle: 'Farm/Household Training on Agriculture',
  },
  [PRODUCTION_AREAS.VALUE_CHAIN_SELECTION]: {
    activities: [
      {
        activityTitle: 'Value Chain Selection',
        interventionIds: [1],
        genderIntegrationIds: [1],
      },
    ],
    pageTitle: 'Value Chain Selection',
  }
}

export const PRODUCTION_PAGE: SectorPage = {
  map: PRODUCTION_PAGE_MAP,
  header: 'Select the box below that reflects the focus of your work in agriculture/livestock production:',
  title: 'Production',
  sectorAreas: PRODUCTION_AREAS,
  imgSrc: ProductionImg,
}

// ---------------------------------------------------------------------

// Typescript doesn't reverse-map string enums, so we're going with this instead for now.
// Probably it would be better to use strings in the future with our own reverse-mapping
// to verify whether or not a string is actually in this enum.
// https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings
export const FOOD_TRADE_AREAS = {
  FOOD_COMMODITY_STORAGE: 'food_commodity_storage',
  MARKETING_DISTRIBUTION_OF_COMMODITIES: 'marketing_distribution_of_commodities',
  FOOD_SAFETY: 'food_safety',
}

export const FOOD_TRADE_PAGE_MAP: SectorMap = {
  [FOOD_TRADE_AREAS.FOOD_COMMODITY_STORAGE]: {
    activities: [
      {
        activityTitle: 'Market-level Or Producer Organization-level Storage Facilities Developed',
        interventionIds: [23],
        genderIntegrationIds: [6],
      },
      {
        activityTitle: 'Household-level Storage Capacities Enhanced',
        interventionIds: [24, 25],
        genderIntegrationIds: [12],
      },
    ],
    pageTitle: 'Food Commodity Storage',
  },
  [FOOD_TRADE_AREAS.MARKETING_DISTRIBUTION_OF_COMMODITIES]: {
    activities: [
      {
        activityTitle: 'Farm-level Marketing/Offtake Enhanced',
        interventionIds: [26, 47, 27],
        genderIntegrationIds: [13],
      },
      {
        activityTitle: 'Trade Of Foods (Inside And Outside The Implementation Area)',
        interventionIds: [28],
        genderIntegrationIds: [14],
      },
      {
        activityTitle: 'Food Processors And Retailers\' Marketing Strategies Developed',
        interventionIds: [29],
        genderIntegrationIds: [15],
      },
    ],
    pageTitle: 'Marketing/Distribution Of Commodities',
  },
  [FOOD_TRADE_AREAS.FOOD_SAFETY]: {
    activities: [
      {
        activityTitle: 'Food Safety, Sanitation, And Hygiene Is Enhanced Along Food Distribution',
        interventionIds: [31, 32],
        genderIntegrationIds: [16],
      },
    ],
    pageTitle: 'Food Safety In Food Storage, Transport, And Trade',
  },
}

export const FOOD_TRADE_PAGE: SectorPage = {
  map: FOOD_TRADE_PAGE_MAP,
  header: 'Select the box below that reflects the focus of your work in food trade/marketing:',
  title: 'Food Trade and Marketing',
  sectorAreas: FOOD_TRADE_AREAS,
  imgSrc: FoodTradeAndMarketingImg,
}

// ---------------------------------------------------------------------

export const FOOD_PROCESSING_AREAS = {
  FARM_AND_HOUSEHOLD_TRAINING_ON_FOOD_PROCESSING: 'farm_and_household_training_on_food_processing',
  COMMERCIAL_TRAINING_ON_FOOD_PROCESSING: 'commercial_training_on_food_processing',
  CONSUMER_MARKETING_BY_FOOD_PROCESSORS: 'consumer_marketing_by_food_processors',
  MARKETING_AND_DISTRIBUTION_OF_COMMODITIES: 'marketing_and_distribution_of_commodities'
}

export const FOOD_PROCESSING_PAGE_MAP: SectorMap = {
  [FOOD_PROCESSING_AREAS.FARM_AND_HOUSEHOLD_TRAINING_ON_FOOD_PROCESSING]: {
    activities: [
      {
        activityTitle: 'Training On Household-level Processing',
        interventionIds: [33],
        genderIntegrationIds: [11],
      },
    ],
    pageTitle: 'Farm/Household Training On Food Processing',
  },
  [FOOD_PROCESSING_AREAS.COMMERCIAL_TRAINING_ON_FOOD_PROCESSING]: {
    activities: [
      {
        activityTitle: 'Diversification Of Processors\' Products',
        interventionIds: [34, 35, 36, 37, 38, 39],
        genderIntegrationIds: [11],
      },
      {
        activityTitle: 'Food Safety Enhanced In Food Processing',
        interventionIds: [41, 42],
        genderIntegrationIds: [],
      },
      {
        activityTitle: 'Product Packaging Enhanced',
        interventionIds: [43, 44, 45],
        genderIntegrationIds: [],
      },
    ],
    pageTitle: 'Commercial Training On Food Processing',
  },
  [FOOD_PROCESSING_AREAS.CONSUMER_MARKETING_BY_FOOD_PROCESSORS]: {
    activities: [
      {
        activityTitle: 'Consumer Marketing Capacities Of Processors Developed',
        interventionIds: [48],
        genderIntegrationIds: [17],
      },
    ],
    pageTitle: 'Consumer Marketing By Food Processors',
  },
  [FOOD_PROCESSING_AREAS.MARKETING_AND_DISTRIBUTION_OF_COMMODITIES]: {
    activities: [
      {
        activityTitle: 'Food Processors And Retailers\' Marketing Strategies Developed',
        interventionIds: [30],
        genderIntegrationIds: [17],
      },
    ],
    pageTitle: 'Marketing/Distribution Of Commodities By Food Processors',
  },
}

export const FOOD_PROCESSING_PAGE: SectorPage = {
  map: FOOD_PROCESSING_PAGE_MAP,
  header: 'Select the box below that reflects the primary focus of your work in processing:',
  title: 'Food Processing',
  sectorAreas: FOOD_PROCESSING_AREAS,
  imgSrc: FoodProcessingImg,
}

// ---------------------------------------------------------------------

export const FOOD_RETAILING_AREAS = {
  LOCATION_OF_FOOD_RETAILING: 'location_of_food_retailing',
  SOCIAL_MARKETING_BY_VENDORS: 'social_marketing_by_vendors',
  PRODUCT_CHARACTERISTICS: 'product_characteristics',
  GOOD_GOVERNANCE_AT_MARKETS: 'good_governance_at_markets'
}

export const FOOD_RETAILING_PAGE_MAP: SectorMap = {
  [FOOD_RETAILING_AREAS.LOCATION_OF_FOOD_RETAILING]: {
    activities: [
      {
        activityTitle: 'Development Of New Retail Locations For Nutrient-rich Foods',
        interventionIds: [49],
        genderIntegrationIds: [18],
      },
      {
        activityTitle: 'Local Market Infrastructure Development',
        interventionIds: [50, 51],
        genderIntegrationIds: [19],
      },
    ],
    pageTitle: 'Location Of Food Retailing',
  },
  [FOOD_RETAILING_AREAS.SOCIAL_MARKETING_BY_VENDORS]: {
    activities: [
      {
        activityTitle: 'Vendors\' Consumer Marketing Capacities Developed',
        interventionIds: [52],
        genderIntegrationIds: [17],
      },
    ],
    pageTitle: 'Social Marketing By Vendors',
  },
  [FOOD_RETAILING_AREAS.PRODUCT_CHARACTERISTICS]: {
    activities: [
      {
        activityTitle: 'Product Sizes Optimized',
        interventionIds: [54, 55],
        genderIntegrationIds: [20],
      },
      {
        activityTitle: 'Food Safety, Sanitation, And Hygiene Considerations Integrated In Food Retailing',
        interventionIds: [56, 57, 58],
        genderIntegrationIds: [21],
      },
    ],
    pageTitle: 'Product Characteristics',
  },
  [FOOD_RETAILING_AREAS.GOOD_GOVERNANCE_AT_MARKETS]: {
    activities: [
      {
        activityTitle: 'Food Safety, Sanitation, And Hygiene Considerations Integrated In Food Retailing',
        interventionIds: [59, 60],
        genderIntegrationIds: [7],
      },
      {
        activityTitle: 'Consumer Marketing At Markets Enhanced',
        interventionIds: [62],
        genderIntegrationIds: [7],
      },
      {
        activityTitle: 'Improvements In Policies And Processes',
        interventionIds: [63],
        genderIntegrationIds: [22],
      },
    ],
    pageTitle: 'Good Governance At Markets',
  },
}

export const FOOD_RETAILING_PAGE: SectorPage = {
  map: FOOD_RETAILING_PAGE_MAP,
  header: 'Select the box below that reflects the primary focus of your work in food retailing:',
  title: 'Food Retailing',
  sectorAreas: FOOD_RETAILING_AREAS,
  imgSrc: FoodRetailingImg,
}

// ---------------------------------------------------------------------

export const CONSUMER_DEMAND_AREAS = {
  INTEGRATION_OF_NUTRITION_MESSAGING: 'integration_of_nutrition_messaging',
  ENGAGEMENT_OF_INFLUENCERS_TO_IMPROVE_CONSUMER_BEHAVIORS: 'engagement_of_influencers_to_improve_consumer_behaviors',
  STANDALONE_TRAININGS_TO_CONSUMERS: 'standalone_trainings_to_consumers',
  PRIVATE_SECTOR_MARKETING_FOR_NUTRITION: 'private_sector_marketing_for_nutrition'
}

export const CONSUMER_DEMAND_PAGE_MAP: SectorMap = {
  [CONSUMER_DEMAND_AREAS.INTEGRATION_OF_NUTRITION_MESSAGING]: {
    activities: [
      {
        activityTitle: 'Private Sector Engagement For Nutrition',
        interventionIds: [64],
        genderIntegrationIds: [4],
      },
      {
        activityTitle: 'Integration Into Project-implemented Trainings And Activities',
        interventionIds: [65],
        genderIntegrationIds: [4],
      },
      {
        activityTitle: 'Integration Into ICT And Other Communication Activities',
        interventionIds: [66],
        genderIntegrationIds: [4],
      },
    ],
    pageTitle: 'Integration Of Nutrition Messaging Into Existing Program Activities',
  },
  [CONSUMER_DEMAND_AREAS.ENGAGEMENT_OF_INFLUENCERS_TO_IMPROVE_CONSUMER_BEHAVIORS]: {
    activities: [
      {
        activityTitle: 'Integration Into Community Health Worker Services',
        interventionIds: [69],
        genderIntegrationIds: [4],
      },
      {
        activityTitle: 'Integration Into Religious Leader Services',
        interventionIds: [70],
        genderIntegrationIds: [4],
      },
      {
        activityTitle: 'Cooking Demonstrations By Community Influencers',
        interventionIds: [71],
        genderIntegrationIds: [4],
      },
    ],
    pageTitle: 'Engagement Of Community Influencers To Improve Consumer Behaviors',
  },
  [CONSUMER_DEMAND_AREAS.STANDALONE_TRAININGS_TO_CONSUMERS]: {
    activities: [
      {
        activityTitle: 'Household Nutrition Trainings',
        interventionIds: [67],
        genderIntegrationIds: [7],
      },
      {
        activityTitle: 'Household Budgeting Training',
        interventionIds: [68],
        genderIntegrationIds: [7],
      },
    ],
    pageTitle: 'Standalone Trainings To Consumers/Program Participants',
  },
  [CONSUMER_DEMAND_AREAS.PRIVATE_SECTOR_MARKETING_FOR_NUTRITION]: {
    activities: [
      {
        activityTitle: 'Integrate Nutrition Messaging In Input Service Delivery',
        interventionIds: [5],
        genderIntegrationIds: [3],
      },
      {
        activityTitle: 'Integrate Nutrition Messaging In Output Market Development Activities',
        interventionIds: [53],
        genderIntegrationIds: [3],
      },
    ],
    pageTitle: 'Private Sector Marketing For Nutrition',
  },
}

export const CONSUMER_DEMAND_PAGE: SectorPage = {
  map: CONSUMER_DEMAND_PAGE_MAP,
  header: 'Select the box below that reflects the primary focus of your work in consumer demand:',
  title: 'Consumer Demand',
  sectorAreas: CONSUMER_DEMAND_AREAS,
  imgSrc: ConsumerDemandImg,
}

// ---------------------------------------------------------------------

export const ENABLING_ENVIRONMENT_AREAS = {
  GOVERNANCE_NUTRITION_SENSITIVE_POLICY_DEVELOPMENT: 'governance_nutrition_sensitive_policy_development',
  GOVERNANCE_PUBLIC_SECTOR_INVOLVEMENT_IN_FOOD_SYSTEM: 'governance_public_sector_involvement_in_food_system',
  BUSINESS_DEVELOPMENT_SERVICES: 'business_development_services',
  ACCESS_TO_FINANCE: 'access_to_finance',
  COMMUNITY_MOBILIZATION: 'community_mobilization'
}

export const ENABLING_ENVIRONMENT_PAGE_MAP: SectorMap = {
  [ENABLING_ENVIRONMENT_AREAS.GOVERNANCE_NUTRITION_SENSITIVE_POLICY_DEVELOPMENT]: {
    activities: [
      {
        activityTitle: 'Government Budgeting For Nutrition',
        interventionIds: [74],
        genderIntegrationIds: [23],
      },
      {
        activityTitle: 'Government Planning For Nutrition Integration',
        interventionIds: [75],
        genderIntegrationIds: [24],
      },
      {
        activityTitle: 'Agricultural Policy Supports Production Of Nutrient-rich Foods',
        interventionIds: [76],
        genderIntegrationIds: [24],
      },
      {
        activityTitle: 'Policies Promote Food Safety Along The Food Supply Chain',
        interventionIds: [77],
        genderIntegrationIds: [24],
      },
      {
        activityTitle: 'Other Food Systems Policy Support Market Actors To Transport, Process, And Sell Nutritious Foods',
        interventionIds: [78],
        genderIntegrationIds: [24],
      },
    ],
    pageTitle: 'Governance - Nutrition-sensitive Policy/Framework Development And/Or Implementation',
  },
  [ENABLING_ENVIRONMENT_AREAS.GOVERNANCE_PUBLIC_SECTOR_INVOLVEMENT_IN_FOOD_SYSTEM]: {
    activities: [
      {
        activityTitle: 'Local Agriculture, Livestock, And/Or Fisheries Officers Or Extension Agents Trained On Nutrition-sensitive Agriculture',
        interventionIds: [79, 80, 81],
        genderIntegrationIds: [7],
      },
      {
        activityTitle: 'Public-private Sector Coordination Throughout The Food System',
        interventionIds: [82, 83],
        genderIntegrationIds: [24],
      },
      {
        activityTitle: 'Public And Private School Meals Provide Nutritious Foods',
        interventionIds: [85],
        genderIntegrationIds: [25],
      },
    ],
    pageTitle: 'Governance - Public Sector Involvement In The Food System',
  },
  [ENABLING_ENVIRONMENT_AREAS.BUSINESS_DEVELOPMENT_SERVICES]: {
    activities: [
      {
        activityTitle: 'Food System Actors\' Business Capacities Improved',
        interventionIds: [86],
        genderIntegrationIds: [26],
      },
    ],
    pageTitle: 'Business Development Services',
  },
  [ENABLING_ENVIRONMENT_AREAS.ACCESS_TO_FINANCE]: {
    activities: [
      {
        activityTitle: 'Food System Actors\' Access Financial Services',
        interventionIds: [87, 88],
        genderIntegrationIds: [27],
      },
    ],
    pageTitle: 'Access To Finance',
  },
  [ENABLING_ENVIRONMENT_AREAS.COMMUNITY_MOBILIZATION]: {
    activities: [
      {
        activityTitle: 'Enhanced Community Mobilization For A Nutritious Food System',
        interventionIds: [89],
        genderIntegrationIds: [28],
      },
    ],
    pageTitle: 'Community Mobilization',
  },
}

export const ENABLING_ENVIRONMENT_PAGE: SectorPage = {
  map: ENABLING_ENVIRONMENT_PAGE_MAP,
  header: 'Select the box below that reflects the primary focus of your work in enabling environment:',
  title: 'Enabling Environment',
  sectorAreas: ENABLING_ENVIRONMENT_AREAS,
  imgSrc: EnablingEnvironmentImg,
}

// ----------------------------------------------------

export const SECTORS = {
  PRODUCTION: 'production',
  FOOD_TRADE_AND_MARKETING: 'food_trade_and_marketing',
  FOOD_PROCESSING: 'food_processing',
  FOOD_RETAILING: 'food_retailing',
  CONSUMER_DEMAND: 'consumer_demand',
  ENABLING_ENVIRONMENT: 'enabling_environment'
}

export const MASTER_SECTOR_MAP: { [key: string]: SectorPage } = {
  [SECTORS.PRODUCTION]: PRODUCTION_PAGE,
  [SECTORS.FOOD_TRADE_AND_MARKETING]: FOOD_TRADE_PAGE,
  [SECTORS.FOOD_PROCESSING]: FOOD_PROCESSING_PAGE,
  [SECTORS.FOOD_RETAILING]: FOOD_RETAILING_PAGE,
  [SECTORS.CONSUMER_DEMAND]: CONSUMER_DEMAND_PAGE,
  [SECTORS.ENABLING_ENVIRONMENT]: ENABLING_ENVIRONMENT_PAGE,
};
