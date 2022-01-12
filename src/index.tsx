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
import { Production } from './pages/sectors/Production';
import { InterventionTemplate } from './pages/interventions/InterventionTemplate';
import { ActivityDetail } from './components/ActivityDetail';
import { ActivityPageTemplate } from './pages/ActivityPageTemplate';
import { FoodTradeAndMarketing } from './pages/sectors/FoodTradeAndMarketing';
import { FoodProcessing } from './pages/sectors/FoodProcessing';
import { FoodRetailing } from './pages/sectors/FoodRetailing';
import { ConsumerDemand } from './pages/sectors/ConsumerDemand';
import { EnablingEnvironment } from './pages/sectors/EnablingEnvironment';
import { GenderIntegrationTemplate } from './pages/genderIntegrations/GenderIntegrationTemplate';
import { InterventionsList } from './pages/lists/InterventionsList';
import { GenderIntegrationsList } from './pages/lists/GenderIntegrationsList';

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

        {/* Sector pages */}
        <Route path='production' element={<Production />} />
        <Route path='foodTradeAndMarketing' element={<FoodTradeAndMarketing />} />
        <Route path='foodProcessing' element={<FoodProcessing />} />
        <Route path='foodRetailing' element={<FoodRetailing />} />
        <Route path='consumerDemand' element={<ConsumerDemand />} />
        <Route path='enablingEnvironment' element={<EnablingEnvironment />} />

        <Route path='activity' element={<ActivityPageTemplate />}>
          <Route path='activityDetail' element={<ActivityDetail />} />
        </Route>

        {/* Intervention pages */}
        <Route path='interventions/:interventionId' element={<InterventionTemplate />} />

        {/* Gender Integrations */}
        <Route path='genderIntegrations/:genderIntegrationId' element={<GenderIntegrationTemplate />} />

        {/* All Nutrition Interventions */}
        <Route path='interventionsList' element={<InterventionsList />} />

        {/* All Gender Integrations */}
        <Route path='genderIntegrationsList' element={<GenderIntegrationsList />} />

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
