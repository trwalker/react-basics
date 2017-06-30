import React from 'react';


const Button = ({count, handleClick}) => {
    return (
        <button onClick={handleClick}>{count}</button>
    );
};

export default Button;