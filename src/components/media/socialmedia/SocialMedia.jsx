import React from 'react';
import './SocialMedia.scss';

const SocialMedia = ({ url, path, platformName, backgroundColor }) => {
    return (
        <a href={url} rel={'noreferrer'} target={'_blank'} >
            <img style={{background: backgroundColor}} className={'social-media'} alt={platformName} src={path}/>
        </a>
    )
}

export default SocialMedia;