import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './pages/App';
import Login from './pages/Login'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


