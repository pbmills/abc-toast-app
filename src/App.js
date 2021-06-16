import React from 'react';
import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import RPTL from './components/RPTL';
import RTPL from './components/RTPL';
import Contact from './components/contact.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className="layout">
      <Header />
      <Banner />
      <RPTL />
      <RTPL />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
