import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import App from './App';
import { Providers } from './contexts';
import { HomeLayout } from './layouts/HomeLayout';
import { NotFound } from './pages/NotFound';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Providers>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path=":city" element={<App />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Providers>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
