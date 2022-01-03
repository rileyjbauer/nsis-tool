import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Preface } from './pages/Preface';
import { Directions } from './pages/Directions';
import { MainNav } from './pages/MainNav';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="preface" element={<Preface />} />
        <Route path="directions" element={<Directions />} />
        <Route path="mainNav" element={<MainNav />} />
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
