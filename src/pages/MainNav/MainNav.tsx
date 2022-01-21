import { BasicPage } from '../../components/basicPage/BasicPage';
import ConsumerDemand from '../../img/ConsumerDemand.png';
import EnablingEnvironment from '../../img/EnablingEnvironment.png';
import Production from '../../img/Production.png';
import FoodRetailing from '../../img/FoodRetailing.png';
import FoodTradeAndMarketing from '../../img/FoodTradeAndMarketing.png';
import FoodProcessing from '../../img/FoodProcessing.png';
import './MainNav.css'
import { Link } from 'react-router-dom';

export function MainNav() {
  const content =
    <div className='nav-container'>
      <div className='nav-button'>
        <Link to='/production' className='nav-link'>
          <img src={Production} className='mobile-nav-button-img' />
          <span className='nav-button-text'>Production</span>
          <img src={Production} className='nav-button-img' />
        </Link>
      </div >
      <div className='nav-button'>
        <Link to='/foodTradeAndMarketing' className='nav-link'>
          <img src={FoodTradeAndMarketing} className='mobile-nav-button-img' />
          <span className='nav-button-text'>Food Trade and Marketing</span>
          <img src={FoodTradeAndMarketing} className='nav-button-img' />
        </Link >
      </div >
      <div className='nav-button'>
        <Link to='/foodProcessing' className='nav-link'>
          <img src={FoodProcessing} className='mobile-nav-button-img' />
          <span className='nav-button-text'>Food Processing</span>
          <img src={FoodProcessing} className='nav-button-img' />
        </Link >
      </div >
      <div className='nav-button'>
        <Link to='/foodRetailing' className='nav-link'>
          <img src={FoodRetailing} className='mobile-nav-button-img' />
          <span className='nav-button-text'>Food Retailing</span>
          <img src={FoodRetailing} className='nav-button-img' />
        </Link >
      </div >
      <div className='nav-button'>
        <Link to='/consumerDemand' className='nav-link'>
          <img src={ConsumerDemand} className='mobile-nav-button-img' />
          <span className='nav-button-text'>Consumer Demand</span>
          <img src={ConsumerDemand} className='nav-button-img' />
        </Link >
      </div >
      <div className='nav-button'>
        <Link to='/enablingEnvironment' className='nav-link'>
          <img src={EnablingEnvironment} className='mobile-nav-button-img' />
          <span className='nav-button-text'>Enabling Environment</span>
          <img src={EnablingEnvironment} className='nav-button-img' />
        </Link >
      </div >
    </div >;

  return (
    <BasicPage
      title='Where in the Food System is your project working?'
      content={content}
      navBackward='/welcome'
    />
  );
}
