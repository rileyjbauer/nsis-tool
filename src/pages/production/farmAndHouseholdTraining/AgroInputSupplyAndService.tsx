import { BasicPage } from '../../../components/BasicPage';
import { Link, Outlet, useLocation } from 'react-router-dom';


export function FarmAndHouseholdTrainingOnAgriculture() {
  const accessToInputsAndServices = 'accessToInputsAndServices';
  const trainingOnGoodPractices = 'trainingOnGoodPractices';
  const trainingOnHouseholdLevelProcessing = 'trainingOnHouseholdLevelProcessing';
  const location = useLocation();

  const content =
    <div style={{ display: 'flex' }}>
      <div>
        <p className='padding-10' >Select the activity you are undertaking:</p>
        <Link to={accessToInputsAndServices} className='non-underlined-link'>
          <div className={`left-nav-button ${location.pathname.endsWith(accessToInputsAndServices) ? ' left-nav-button-selected' : ''}`}>
            <p>Farm/HH Access To Inputs And Services</p>
          </div>
        </Link>
        <Link to={trainingOnGoodPractices} className='non-underlined-link'>
          <div className={`left-nav-button ${location.pathname.endsWith(trainingOnGoodPractices) ? ' left-nav-button-selected' : ''}`}>
            <p>Training On Good Agricultural Practices</p>
          </div>
        </Link>
        <Link to={trainingOnHouseholdLevelProcessing} className='non-underlined-link'>
          <div className={`left-nav-button ${location.pathname.endsWith(trainingOnHouseholdLevelProcessing) ? ' left-nav-button-selected' : ''}`}>
            <p>Training On Household-level Processing</p>
          </div>
        </Link>
      </div>
      <div className='content-box'>
        <Outlet />
      </div>
    </div >;

  return (
    <BasicPage
      title="Farm/ Household Training on Agriculture"
      content={content}
      navBackward="/production"
    />
  );
}
