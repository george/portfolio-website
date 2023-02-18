import React from 'react';

const Logo = ({ src, alt, url, width = 64, height = 64}) => {
    return (
        <a href={url}>
            <img width={width} height={height} src={src} alt={alt}/>
        </a>
    );
}

export default Logo;