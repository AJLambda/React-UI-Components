import React from 'react';
import './Display.css';

//Create a <CalculatorDisplay /> component that will be used as the calculator display
//My display should also be able to accept dynamic props displayStyle for styling
//My component should be able to render a dynamic prop called text


const CalculatorDisplay = (props) => {
    return (
        <div className={props.displayStyle}>{props.text}</div>
    );
};

export default CalculatorDisplay;