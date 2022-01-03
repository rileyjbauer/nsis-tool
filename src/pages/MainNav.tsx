import { BasicPage } from '../components/BasicPage';
import ConsumerDemand from '../img/ConsumerDemand.png';
import EnablingEnvironment from '../img/EnablingEnvironment.png';
import Production from '../img/Production.png';
import FoodRetailing from '../img/FoodRetailing.png';
import FoodTradeAndMarketing from '../img/FoodTradeAndMarketing.png';
import FoodProcessing from '../img/FoodProcessing.png';
import './MainNav.css'

export function MainNav() {
  const content =
    <div>
      <div className="navRow">
        <div className="navButton">
          <img src={Production} className="navButtonImg" />
        </div>
        <div className="navButton">
          <img src={FoodTradeAndMarketing} className="navButtonImg" />
        </div>
        <div className="navButton">
          <img src={FoodProcessing} className="navButtonImg" />
        </div>
      </div>
      <div className="navRow">
        <div className="navButton">
          <img src={FoodRetailing} className="navButtonImg" />
        </div>
        <div className="navButton">
          <img src={ConsumerDemand} className="navButtonImg" />
        </div>
        <div className="navButton">
          <img src={EnablingEnvironment} className="navButtonImg" />
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
