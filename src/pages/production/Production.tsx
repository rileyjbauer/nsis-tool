import { Link } from 'react-router-dom';
import { BasicPage } from '../../components/BasicPage';

export function Production() {
  const content =
    <div>
      <p>
        Select the box below that reflects the focus of your work in agriculture/livestock production:
      </p>
      <div>
        <div className='navRow'>
          <Link to='/agroInputSupplyAndService'>
            <div className='float-nav-button'>
              <p>Agro-Input Supply and Service Delivery</p>
            </div>
          </Link>
          <Link to='/farmAndHouseholdTraining'>
            <div className='float-nav-button'>
              <p>Farm/Household Training on Agriculture</p>
            </div>
          </Link>
        </div>
        <div>
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
        </div>
      </div>
    </div>;

  return (
    <BasicPage
      title="Production"
      content={content}
      navBackward="/mainNav"
    />
  );
}
