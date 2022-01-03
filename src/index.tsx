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
import { Production } from './pages/Production';
import { AgroInputSupplyAndService } from './pages/AgroInputSupplyAndService';
import { IncreasingEquitableAccess } from './pages/IncreasingEquitableAccess';
import { CapacityDevelopmentOfDeliveryActors } from './pages/CapacityDevelopmentOfDeliveryActors';

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
        <Route path="/" element={<App />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="preface" element={<Preface />} />
        <Route path="directions" element={<Directions />} />
        <Route path="mainNav" element={<MainNav />} />
        <Route path="production" element={<Production />} />
        <Route path="agroInputSupplyAndService" element={<AgroInputSupplyAndService />}>
          <Route path='increasingEquitableAccess' element={<IncreasingEquitableAccess />} />
          <Route path='capacityDevelopmentOfDeliveryActors' element={<CapacityDevelopmentOfDeliveryActors />} />
        </Route>
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
