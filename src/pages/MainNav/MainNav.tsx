import { BasicPage } from '../../components/BasicPage';
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
    <div className="container">
      <div className="navButton">
        <Link to="/production" className="nav-link">Production<img src={Production} className="navButtonImg" /></Link>
      </div>
      <div className="navButton">
        <Link to="/foodTradeAndMarketing" className="nav-link">Food Trade and Marketing<img src={FoodTradeAndMarketing} className="navButtonImg" /></Link>
      </div>
      <div className="navButton">
        <Link to="/foodProcessing" className="nav-link">Food Processing<img src={FoodProcessing} className="navButtonImg" /></Link>
      </div>
      <div className="navButton">
        <Link to="/foodRetailing" className="nav-link">Food Retailing<img src={FoodRetailing} className="navButtonImg" /></Link>
      </div>
      <div className="navButton">
        <Link to="/consumerDemand" className="nav-link">Consumer Demand<img src={ConsumerDemand} className="navButtonImg" /></Link>
      </div>
      <div className="navButton">
        <Link to="/enablingEnvironment" className="nav-link">Enabling Environment<img src={EnablingEnvironment} className="navButtonImg" /></Link>
      </div>
    </div>;

  return (
    <BasicPage
      title="Where in the Food System is your project working?"
      content={content}
      navBackward="/directions"
    />
  );
}
