import React from 'react';

const SocialMedia = ({ url, path, platformName, backgroundColor }) => {
    const HandleClick = () => {
        window.open(url, '_blank');
    }

    return (
        <img style={{background: backgroundColor}} className={'social-media'} alt={platformName} src={path}
             onClick={HandleClick}/>
    )
}

export default SocialMedia;