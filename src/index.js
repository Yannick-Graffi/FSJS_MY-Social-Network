import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './components/menu/menu';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/login/login';
import RegisterAccount from './pages/register/register';
import FilActu from './pages/filActu/filActu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/Login' element={<Loginpage />} />
        <Route path='/Register' element={<RegisterAccount/>} />
        <Route path='/Actu' element={<FilActu/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
