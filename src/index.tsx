import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { ActivityDetail } from './components/activityDetail/ActivityDetail';
import './index.css';
import { GenderIntegrationTemplate } from './pages/genderIntegrations/GenderIntegrationTemplate';
import { InterventionTemplate } from './pages/interventions/InterventionTemplate';
import { GenderIntegrationsList } from './pages/lists/GenderIntegrationsList';
import { InterventionsList } from './pages/lists/InterventionsList';
import { MainNav } from './pages/MainNav/MainNav';
import { SectorAreaPageTemplate } from './pages/sectorAreaPageTemplate/SectorAreaPageTemplate';
import { Sector } from './pages/sectors/Sector';
import App from './pages/titlePage/App';
import { Welcome } from './pages/welcome/Welcome';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

function NoMatch() {
  return (
    <div className='no-match-container'>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

// Ensures that each time the user navigates, the app scrolls to the top of the page
function ScrollToTopWrapper({ children }: any) {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

ReactDOM.render(
  (
    <React.StrictMode>
      <BrowserRouter basename={`/nsis-tool`}>
        <ScrollToTopWrapper>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='welcome' element={<Welcome />} />
            <Route path='mainNav' element={<MainNav />} />
            <Route path='sector' element={<Sector />} />

            <Route path='sector_area' element={<SectorAreaPageTemplate />}>
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
        </ScrollToTopWrapper>
      </BrowserRouter>
    </React.StrictMode>
  ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
