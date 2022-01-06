import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/BasicPage';
import { ActivityTemplateProps } from '../ActivityPageTemplate';

// Typescript doesn't reverse-map string enums, so we're going with this instead for now.
// Probably it would be better to use strings in the future with our own reverse-mapping
// to verify whether or not a string is actually in this enum.
// https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings 
export const Activities = {
  AGRO_INPUT_SUPPLY: 'agro_input_supply',
  PRODUCER_FARMER_ORGANIZATION_DEVELOPMENT: 'producer_farmer_organization_development',
  FARM_AND_HOUSEHOLD_TRAINING: 'farm_and_household_training',
}

export const PRODUCTION_PAGE_MAP: { [key: string]: ActivityTemplateProps } = {
  [Activities.AGRO_INPUT_SUPPLY]: {
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
    urlPath: 'agroInputSupplyAndService'
  },
  [Activities.PRODUCER_FARMER_ORGANIZATION_DEVELOPMENT]: {
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
    urlPath: 'producerFarmerOragnizationDevelopment'
  },
  [Activities.FARM_AND_HOUSEHOLD_TRAINING]: {
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
    urlPath: 'farmAndHouseholdTraining'
  }
}

export const PRODUCTION_ACTIVITY_PARAM = 'activity';

export function Production() {
  const content =
    <div>
      <p>
        Select the box below that reflects the focus of your work in agriculture/livestock production:
      </p>
      <div>
        <div className='navRow'>
          {Object.values(Activities).map((v, i) =>
            <Link key={i} to={`/productionActivity?${PRODUCTION_ACTIVITY_PARAM}=${v}`}>
              <div className='float-nav-button'>
                <p>{PRODUCTION_PAGE_MAP[v].pageTitle}</p>
              </div>
            </Link>)}
          {/* <Link to={`/productionActivity?${PRODUCTION_ACTIVITY_PARAM}=${Activities.AGRO_INPUT_SUPPLY}`}>
            <div className='float-nav-button'>
              <p>{PRODUCTION_PAGE_MAP[Activities.AGRO_INPUT_SUPPLY].pageTitle}</p>
            </div>
          </Link>
          <Link to='/farmAndHouseholdTraining'>
            <div className='float-nav-button'>
              <p>Farm/Household Training on Agriculture</p>
            </div>
          </Link> */}
        </div>
        {/* <div>
          <Link to='/producerFarmerOragnizationDevelopment'>
            <div className='float-nav-button'>
              <p>Producer/Farmer Organization Development</p>
            </div>
          </Link>
          <Link to='/valueChainSelection'>
            <div className='float-nav-button'>
              <p>Value Chain Selection</p>
            </div>
          </Link>
        </div> */}
      </div>
    </div>;
  // const content =
  //   <div>
  //     <p>
  //       Select the box below that reflects the focus of your work in agriculture/livestock production:
  //     </p>
  //     <div>
  //       <div className='navRow'>
  //         <Link to='/agroInputSupplyAndService'>
  //           <div className='float-nav-button'>
  //             <p>Agro-Input Supply and Service Delivery</p>
  //           </div>
  //         </Link>
  //         <Link to='/farmAndHouseholdTraining'>
  //           <div className='float-nav-button'>
  //             <p>Farm/Household Training on Agriculture</p>
  //           </div>
  //         </Link>
  //       </div>
  //       <div>
  //         <Link to='/producerFarmerOragnizationDevelopment'>
  //           <div className='float-nav-button'>
  //             <p>Producer/Farmer Organization Development</p>
  //           </div>
  //         </Link>
  //         <Link to='/valueChainSelection'>
  //           <div className='float-nav-button'>
  //             <p>Value Chain Selection</p>
  //           </div>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>;

  return (
    <BasicPage
      title="Production"
      content={content}
      navBackward="/mainNav"
    />
  );
}
