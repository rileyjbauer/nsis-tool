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
    <div>
      <div className="navRow">
        <div className="navButton">
          <Link to="/production">Production<img src={Production} className="navButtonImg" /></Link>
        </div>
        <div className="navButton">
          <Link to="/foodTradeAndMarketing">Food Trade and Marketing<img src={FoodTradeAndMarketing} className="navButtonImg" /></Link>
        </div>
        <div className="navButton">
          <Link to="/foodProcessing">Food Processing<img src={FoodProcessing} className="navButtonImg" /></Link>
        </div>
      </div>
      <div className="navRow">
        <div className="navButton">
          <Link to="/foodRetailing">Food Retailing<img src={FoodRetailing} className="navButtonImg" /></Link>
        </div>
        <div className="navButton">
          <Link to="/consumerDemand">Consumer Demand<img src={ConsumerDemand} className="navButtonImg" /></Link>
        </div>
        <div className="navButton">
          <Link to="/enablingEnvironment">Enabling Environment<img src={EnablingEnvironment} className="navButtonImg" /></Link>
        </div>
      </div>
    </div>;

  return (
    <BasicPage
      title="WHERE IN THE FOOD SYSTEM IS YOUR PROJECT WORKING?"
      content={content}
      navBackward="/directions"
    />
  );
}
