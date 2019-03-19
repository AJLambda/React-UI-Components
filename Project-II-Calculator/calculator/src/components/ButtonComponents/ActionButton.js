import React from 'react';
import './Button.css';

//Create an <ActionButton /> component that will be used for the zero character and the clear button.
//My button should also be able to accept dynamic props actionButton for styling
//My component should be able to render a dynamic prop called text


const ActionButton = (props) => {
    return (
        <button className={props.actionButton}>{props.text}</button>
    );
};

export default ActionButton;