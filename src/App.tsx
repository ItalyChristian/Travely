import React from 'react';
import './styles/globals.css';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () =>  {
  return (
    <Router>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Router>
  )
}

export default App;

