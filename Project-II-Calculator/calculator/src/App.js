import React from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className = "mainContainer">

        <div className = "div1">
          <CalculatorDisplay displayStyle = {'display'} text = {'0'} />
        </div>

      <section className = "textContainer">

        <div className = "div2">
          <ActionButton actionButton = {'action'} text = {'clear'} />
          <NumberButton buttonStyle = {'operator'} text = {'/'} />
        </div>

        <div className = "div3">
          <NumberButton buttonStyle = {'num'} text = {'7'} />
          <NumberButton buttonStyle = {'num'} text = {'8'} />
          <NumberButton buttonStyle = {'num'} text = {'9'} />
          <NumberButton buttonStyle = {'operator'} text = {'x'} />
        </div>

        <div className = "div4">
          <NumberButton buttonStyle = {'num'} text = {'4'} />
          <NumberButton buttonStyle = {'num'} text = {'5'} />
          <NumberButton buttonStyle = {'num'} text = {'6'} />
          <NumberButton buttonStyle = {'operator'} text = {'-'} />
        </div>

        <div className = "div5">
          <NumberButton buttonStyle = {'num'} text = {'1'} />
          <NumberButton buttonStyle = {'num'} text = {'2'} />
          <NumberButton buttonStyle = {'num'} text = {'3'} />
          <NumberButton buttonStyle = {'operator'} text = {'+'} />
        </div>

        <div className = "div6">
          <NumberButton buttonStyle = {'num'} text = {'0'} /> 
          <NumberButton buttonStyle = {'operator'} text = {'='} />
        </div>

      </section>

    </div>
  );
};

export default App;
