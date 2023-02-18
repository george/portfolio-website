import React from 'react';

const Button = ({ title, href }) => {
    return (
        <button>
            <a href={href}>{title}</a>
        </button>
    )
}

export default Button;