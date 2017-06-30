import React from 'react';


const Button = ({handleClick}) => {
    return (
        <button className="btn btn-primary btn-block" onClick={handleClick}>+1</button>
    );
};

export default Button;