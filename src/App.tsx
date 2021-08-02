import React from 'react';
import './styles/globals.css';
import FirstSection from './components/FirstSection';
import Simulation from './components/Simulation';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () =>  {
  return (
    <Router>
      <FirstSection />
      <Simulation />
    </Router>
  )
}

export default App;

