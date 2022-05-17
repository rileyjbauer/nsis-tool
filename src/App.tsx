
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ActivityDetail } from './components/activityDetail/ActivityDetail';
import { ScrollToTopWrapper } from './components/ScrollToTopWrapper';
import { ServiceWorkerUpdater } from './components/ServiceWorkerUpdater';
import './index.css';
import { GenderIntegrationTemplate } from './pages/genderIntegrations/GenderIntegrationTemplate';
import { InterventionTemplate } from './pages/interventions/InterventionTemplate';
import { GenderIntegrationsList } from './pages/lists/GenderIntegrationsList';
import { InterventionsList } from './pages/lists/InterventionsList';
import { MainNav } from './pages/MainNav/MainNav';
import { SectorAreaPageTemplate } from './pages/sectorAreaPageTemplate/SectorAreaPageTemplate';
import { Sector } from './pages/sectors/Sector';
import TitlePage from './pages/titlePage/TitlePage';
import { Welcome } from './pages/welcome/Welcome';

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

export type Cart = {
  nutritionInterventions: Map<number, string>,
  genderIntegrations: Map<number, string>,
}

export type CartContext = {
  cart: Cart,
  addIntervention: (id: number, title: string) => void,
  removeIntervention: (id: number) => void,
  addIntegration: (id: number, title: string) => void,
  removeIntegration: (id: number) => void,
}

export const CartContext = React.createContext({} as CartContext);

export function App(): JSX.Element {
  const [cartState, setCart] = useState({
    nutritionInterventions: new Map<number, string>(),
    genderIntegrations: new Map<number, string>(),
  });

  const context = {
    cart: cartState,
    // TODO: Clean these up, probably with ... or something
    addIntervention: (id: number, title: string) => {
      const newVal = new Map<number, string>(cartState.nutritionInterventions);
      newVal.set(id, title);
      setCart({
        nutritionInterventions: newVal,
        genderIntegrations: cartState.genderIntegrations,
      });
    },
    removeIntervention: (id: number) => {
      const newVal = new Map<number, string>(cartState.nutritionInterventions);
      newVal.delete(id);
      setCart({
        nutritionInterventions: newVal,
        genderIntegrations: cartState.genderIntegrations,
      });
    },
    addIntegration: (id: number, title: string) => {
      const newVal = new Map<number, string>(cartState.genderIntegrations);
      newVal.set(id, title);
      setCart({
        nutritionInterventions: cartState.nutritionInterventions,
        genderIntegrations: newVal,
      });
    },
    removeIntegration: (id: number) => {
      const newVal = new Map<number, string>(cartState.genderIntegrations);
      newVal.delete(id);
      setCart({
        nutritionInterventions: cartState.nutritionInterventions,
        genderIntegrations: newVal,
      });
    },
  };

  return (
    <React.StrictMode>
      <BrowserRouter basename={'/tools/interactive_nsis_tool'}>
        <ScrollToTopWrapper>
          <ServiceWorkerUpdater />
          <CartContext.Provider value={context}>
            <Routes>
              <Route path='/' element={<TitlePage />} />
              {/* Ensures app loads even if the host redirects to index itself */}
              <Route path='/index.html' element={<TitlePage />} />
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
          </CartContext.Provider>
        </ScrollToTopWrapper>
      </BrowserRouter>
    </React.StrictMode>
  );
}