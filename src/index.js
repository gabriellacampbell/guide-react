import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./layout";
import Home from "./pages/home/home";
import Activities from "./pages/activities/Activities";
import Nightlife from "./pages/nightlife/Nightlife";
import Clothing from "./pages/clothing/Clothing";
import Housing from "./pages/housing/Housing";
import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element = {<Home />} />
          <Route path = "activities" element = {<Activities />} />
          <Route path = "nightlife" element = {<Nightlife />} />
          <Route path = "clothing" element = {<Clothing />} />
          <Route path = "housing" element = {<Housing />} />
        </Route>
      </Routes>
    </HashRouter>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

