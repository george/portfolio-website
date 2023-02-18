import React from 'react';

const Logo = ({ src, alt, width = 64, height = 64}) => {
    return (
        <img width={width} height={height} src={src} alt={alt}/>
    );
}

export default Logo;