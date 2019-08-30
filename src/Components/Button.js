import React from 'react';

const Button = ({elementId, buttonDisplayName, clickHandler}) => (
    <button id={elementId} onClick={clickHandler}>{buttonDisplayName}</button>
)

export default Button;