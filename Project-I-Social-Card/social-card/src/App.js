import React from 'react';
import './App.css';

//import custom components
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';


const App = () => {
  return (
    <div className = 'main-app'>

      <section className = 'main-container'>
        <HeaderContainer />
      </section>

      <section className = 'main-card'>
        <CardContainer />
      </section>

    </div>
  );
};

export default App;
