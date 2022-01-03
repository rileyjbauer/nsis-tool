import { BasicPage } from '../components/BasicPage';
import { Link, Outlet, useLocation } from 'react-router-dom';


export function AgroInputSupplyAndService() {
  const increaseAccess = 'increasingEquitableAccess';
  const capacityDevelopment = 'capacityDevelopmentOfDeliveryActors';
  const location = useLocation();

  const content =
    <div style={{ display: 'flex' }}>
      <div>
        <p className='padding-10' >Select the activity you are undertaking:</p>
        <Link to={increaseAccess} className='non-underlined-link'>
          <div className={`left-nav-button ${location.pathname.endsWith(increaseAccess) ? ' left-nav-button-selected' : ''}`}>
            <p>Increasing Equitable Access to Inputs/Services​</p>
          </div>
        </Link>
        <Link to={capacityDevelopment} className='non-underlined-link'>
          <div className={`left-nav-button ${location.pathname.endsWith(capacityDevelopment) ? ' left-nav-button-selected' : ''}`}>
            <p>Capacity Development of Input/Service Delivery Actors​​</p>
          </div>
        </Link>
      </div>
      <div className='content-box'>
        <Outlet />
      </div>
    </div >;

  return (
    <BasicPage
      title="Agro-Input Supply and Service Delivery​"
      content={content}
      navBackward="/production"
    />
  );
}
