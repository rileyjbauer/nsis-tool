import React, { useEffect, useState } from 'react';
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
    // Always scroll to top on page load
    document.documentElement.scrollTo(0, 0);

    // TODO: Verify whether or not this is needed
    // Make sure to show service worker update even when user navigates
    if ('serviceWorker' in navigator && navigator.serviceWorker) {
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((reg) => reg.update()));
    }
  }, [location.pathname]);

  return children
}

function ServiceWorkerUpdater(): JSX.Element {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    console.log('onSWUpdate called');
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    // Learn more about service workers: https://cra.link/PWA
    serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
  }, []);

  // Show prompt to user. If user hits "REFRESH" then the new service worker is
  // put in control and the page reloads
  const reloadPage = () => {
    // We reload the page inside the serviceworker in its handler for
    // the SKIP_WAITING event
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });

    setShowReload(false);
  }

  return (
    <div>
      {showReload && (
        <div className='sw-update-container'>
          <div className='sw-update-helpbox'>
            <p>New content available:</p>
            <button className='sw-update-refresh-button' onClick={reloadPage}>
              REFRESH
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(
  (
    <React.StrictMode>
      <BrowserRouter basename={'/tools/interactive_nsis_tool'}>
        <ScrollToTopWrapper>
          <ServiceWorkerUpdater />
          <Routes>
            <Route path='/' element={<App />} />
            {/* Ensures app loads even if the host redirects to index itself */}
            <Route path='/index.html' element={<App />} />
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
  document.getElementById('nsis-tool-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register(serviceWorkerConfig);
