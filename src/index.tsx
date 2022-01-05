import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Preface } from './pages/Preface';
import { Directions } from './pages/Directions';
import { MainNav } from './pages/MainNav/MainNav';
import { Production } from './pages/production/Production';
import { AgroInputSupplyAndService } from './pages/production/AgroInputSupplyAndService';
import { ProducerFarmerOragnizationDevelopment } from './pages/production/ProducerFarmerOragnizationDevelopment';
import { FarmAndHouseholdTrainingOnAgriculture } from './pages/production/farmAndHouseholdTraining/AgroInputSupplyAndService';
import { AccessToInputsAndServices } from './pages/production/farmAndHouseholdTraining/AccessToInputsAndServices';
import { TrainingOnGoodPractices } from './pages/production/farmAndHouseholdTraining/TrainingOnGoodPractices';
import { TrainingOnHouseholdLevelProcessing } from './pages/production/farmAndHouseholdTraining/TrainingOnHouseholdLevelProcessing';
import { ValueChainSelection } from './pages/production/valueChainSelection/ValueChainSelection';
import { InterventionTemplate } from './components/InterventionTemplate';
import { DrillDownTemplate } from './components/DrillDownTemplate';

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='preface' element={<Preface />} />
        <Route path='directions' element={<Directions />} />
        <Route path='mainNav' element={<MainNav />} />
        <Route path='production' element={<Production />} />
        <Route path='agroInputSupplyAndService' element={<AgroInputSupplyAndService />}>
          <Route path='drillDown' element={<DrillDownTemplate />} />
        </Route>
        {/* Interventions */}
        <Route path='interventions/:interventionId' element={<InterventionTemplate />} />
        {/* <Route path='increaseAccessToSafeStorage' element={<IncreaseAccessToSafeStorage />} /> */}

        <Route path='producerFarmerOragnizationDevelopment' element={<ProducerFarmerOragnizationDevelopment />}>
          <Route path='drillDown' element={<DrillDownTemplate />} />
        </Route>
        {/* Interventions */}
        {/* <Route path='integrateNutritionMessaging' element={<IntegrateNutritionMessaging />} /> */}

        <Route path='farmAndHouseholdTraining' element={<FarmAndHouseholdTrainingOnAgriculture />}>
          <Route path='accessToInputsAndServices' element={<AccessToInputsAndServices />} />
          <Route path='trainingOnGoodPractices' element={<TrainingOnGoodPractices />} />
          <Route path='trainingOnHouseholdLevelProcessing' element={<TrainingOnHouseholdLevelProcessing />} />
        </Route>
        <Route path='valueChainSelection' element={<ValueChainSelection />} />
        {/* Catch all other paths and display placeholder page */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
