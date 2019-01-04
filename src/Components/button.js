import React from 'react';

function Button (props) {
    return(
        <button type={props.type}>{props.label}</button>
    );
}

export default Button;