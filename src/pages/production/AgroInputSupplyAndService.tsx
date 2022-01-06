import { BasicPage } from '../../components/BasicPage';
import { Link, Outlet } from 'react-router-dom';
// import { getURL } from '../../components/DrillDownTemplate';
import { useState } from 'react';


export function AgroInputSupplyAndService() {
  let [navButtonSelected, setNavButtonSelected] = useState(-1);
  const activities =
    [
      'Increasing Equitable Access to Inputs/Services',
      'Capacity Development of Input/Service Delivery Actors'
    ];

  // const content =
  //   <div style={{ display: 'flex' }}>
  //     <div>
  //       <p className='padding-10' >Select the activity you are undertaking:</p>
  //       <Link to={getURL([2, 3, 4], activities[0])} className='non-underlined-link' onClick={() => setNavButtonSelected(0)}>
  //         <div className={`left-nav-button ${navButtonSelected === 0 ? ' left-nav-button-selected' : ''}`}>
  //           <p>{activities[0]}</p>
  //         </div>
  //       </Link>
  //       <Link to={getURL([5, 6, 7], activities[1])} className='non-underlined-link' onClick={() => setNavButtonSelected(1)}>
  //         <div className={`left-nav-button ${navButtonSelected === 1 ? ' left-nav-button-selected' : ''}`}>
  //           <p>{activities[1]}</p>
  //         </div>
  //       </Link>
  //     </div>
  //     <div className='content-box'>
  //       <Outlet />
  //     </div>
  //   </div >;

  return (
    <BasicPage
      title="Agro-Input Supply and Service Delivery"
      // content={content}
      navBackward="/production"
    />
  );
}
