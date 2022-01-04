import { BasicPage } from '../../../components/BasicPage';
import { Link, Outlet, useLocation } from 'react-router-dom';


export function ProducerFarmerOragnizationDevelopment() {
  const marketingDevelopment = 'marketingOfftakeDevelopment';
  const diversificationOfOfferings = 'diversificationOfOfferings';
  const developmentOfStorageFacilities = 'developmentOfStorageFacilities';
  const producerOrganizationMemberTraining = 'producerOrganizationMemberTraining';
  const womensParticipationInProducerOrganization = 'womensParticipationInProducerOrganization';
  const location = useLocation();

  const content =
    <div style={{ display: 'flex' }}>
      <div>
        <p className='padding-10' >Select the activity you are undertaking:</p>
        <Link to={marketingDevelopment} className='non-underlined-link'>
          <div className={`left-nav-button ${location.pathname.endsWith(marketingDevelopment) ? ' left-nav-button-selected' : ''}`}>
            <p>Marketing/Offtake Development</p>
          </div>
        </Link>
        <Link to={diversificationOfOfferings} className='non-underlined-link'>
          <div className={`left-nav-button ${location.pathname.endsWith(diversificationOfOfferings) ? ' left-nav-button-selected' : ''}`}>
            <p>Diversification Of Operations/Service Offerings</p>
          </div>
        </Link>
        <Link to={developmentOfStorageFacilities} className='non-underlined-link'>
          <div className={`left-nav-button ${location.pathname.endsWith(developmentOfStorageFacilities) ? ' left-nav-button-selected' : ''}`}>
            <p>Development Of Storage Facilities</p>
          </div>
        </Link>
        <Link to={producerOrganizationMemberTraining} className='non-underlined-link'>
          <div className={`left-nav-button ${location.pathname.endsWith(producerOrganizationMemberTraining) ? ' left-nav-button-selected' : ''}`}>
            <p>Producer Organization Member Training</p>
          </div>
        </Link>
        <Link to={womensParticipationInProducerOrganization} className='non-underlined-link'>
          <div className={`left-nav-button ${location.pathname.endsWith(womensParticipationInProducerOrganization) ? ' left-nav-button-selected' : ''}`}>
            <p>Women's Meaningful Participation In Producer Organization</p>
          </div>
        </Link>
      </div>
      <div className='content-box'>
        <Outlet />
      </div>
    </div >;

  return (
    <BasicPage
      title="Producer/Farmer Organization Development"
      content={content}
      navBackward="/production"
    />
  );
}
