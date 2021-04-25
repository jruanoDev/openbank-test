import React from 'react';

import './Button.scss';

const Button = ({ type, endAddornment, children }) => {

    const buttonClass = type === 'filled' ? 'Button-filled' : 'Button';
    return (
        <button className={buttonClass}>
            {children}
            {endAddornment && (
                <div className="Button-endAddornment">
                    {endAddornment}
                </div>
            )}
        </button>
    )
};

export default Button;