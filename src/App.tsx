
import React, { useEffect, useState } from 'react';
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
import { Print } from './pages/print/Print';
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
  clearCart: () => void,
}

export const CartContext = React.createContext({} as CartContext);

const STORAGE_KEY = 'cart';

// Needed to stringify Map object
function replacer(key: any, value: any) {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()),
    };
  } else {
    return value;
  }
}

// Needed to parse stringified Map object
function reviver(key: any, value: any) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}

export function App(): JSX.Element {
  const [cartState, setCart] = useState(() => {
    const savedCartState = window?.localStorage?.getItem(STORAGE_KEY);
    return (savedCartState
      ? JSON.parse(savedCartState, reviver) as Cart
      : {
        nutritionInterventions: new Map<number, string>(),
        genderIntegrations: new Map<number, string>(),
      }
    );
  });

  // Place cart state into local storage, if it exists
  useEffect(() => {
    if (cartState) {
      window?.localStorage?.setItem(
        STORAGE_KEY,
        JSON.stringify(cartState, replacer)
      );
    }
  }, [cartState]);

  const context = {
    cart: cartState,
    addIntervention: (id: number, title: string) => {
      setCart((previousState) => {
        // Create new Map so React knows the state has changed
        const newVal = new Map<number, string>(previousState.nutritionInterventions);
        newVal.set(id, title);
        return {
          nutritionInterventions: newVal,
          genderIntegrations: cartState.genderIntegrations,
        }
      });
    },
    removeIntervention: (id: number) => {
      setCart((previousState) => {
        // Create new Map so React knows the state has changed
        const newVal = new Map<number, string>(previousState.nutritionInterventions);
        newVal.delete(id);
        return {
          nutritionInterventions: newVal,
          genderIntegrations: cartState.genderIntegrations,
        }
      });
    },
    addIntegration: (id: number, title: string) => {
      setCart((previousState) => {
        // Create new Map so React knows the state has changed
        const newVal = new Map<number, string>(previousState.genderIntegrations);
        newVal.set(id, title);
        return {
          nutritionInterventions: cartState.nutritionInterventions,
          genderIntegrations: newVal,
        }
      });
    },
    removeIntegration: (id: number) => {
      setCart((previousState) => {
        // Create new Map so React knows the state has changed
        const newVal = new Map<number, string>(previousState.genderIntegrations);
        newVal.delete(id);
        return {
          nutritionInterventions: cartState.nutritionInterventions,
          genderIntegrations: newVal,
        }
      });
    },
    clearCart: () => {
      setCart({
        nutritionInterventions: new Map<number, string>(),
        genderIntegrations: new Map<number, string>(),
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

              <Route path='print' element={<Print />} />

              {/* Catch all other paths and display placeholder page */}
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </CartContext.Provider>
        </ScrollToTopWrapper>
      </BrowserRouter>
    </React.StrictMode>
  );
}