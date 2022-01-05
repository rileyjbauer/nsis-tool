import { BasicPage } from '../../components/BasicPage';
import { Link, Outlet } from 'react-router-dom';
import { getURL } from '../../components/DrillDownTemplate';
import { useState } from 'react';


export function ProducerFarmerOragnizationDevelopment() {
  let [navButtonSelected, setNavButtonSelected] = useState(-1);
  const activities =
    [
      'Marketing/Offtake Development',
      'Diversification Of Operations/Service Offerings',
      'Development Of Storage Facilities',
      'Producer Organization Member Training',
      'Women\'s Meaningful Participation In Producer Organization'
    ];

  const content =
    <div style={{ display: 'flex' }}>
      <div>
        <p className='padding-10' >Select the activity you are undertaking:</p>
        <Link to={getURL([8, 9, 10], activities[0])} className='non-underlined-link' onClick={() => setNavButtonSelected(0)}>
          <div className={`left-nav-button ${navButtonSelected === 0 ? ' left-nav-button-selected' : ''}`}>
            <p>{activities[0]}</p>
          </div>
        </Link>
        <Link to={getURL([11, 12], activities[1])} className='non-underlined-link' onClick={() => setNavButtonSelected(1)}>
          <div className={`left-nav-button ${navButtonSelected === 1 ? ' left-nav-button-selected' : ''}`}>
            <p>{activities[1]}</p>
          </div>
        </Link>
        <Link to={getURL([13, 14], activities[2])} className='non-underlined-link' onClick={() => setNavButtonSelected(2)}>
          <div className={`left-nav-button ${navButtonSelected === 2 ? ' left-nav-button-selected' : ''}`}>
            <p>{activities[2]}</p>
          </div>
        </Link>
        <Link to={getURL([15], activities[3])} className='non-underlined-link' onClick={() => setNavButtonSelected(3)}>
          <div className={`left-nav-button ${navButtonSelected === 3 ? ' left-nav-button-selected' : ''}`}>
            <p>{activities[3]}</p>
          </div>
        </Link>
        <Link to={getURL([16, 17], activities[4])} className='non-underlined-link' onClick={() => setNavButtonSelected(4)}>
          <div className={`left-nav-button ${navButtonSelected === 4 ? ' left-nav-button-selected' : ''}`}>
            <p>{activities[4]}</p>
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
