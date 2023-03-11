import React from 'react';

import Title from "../../text/title/Title";

import './Hero.scss';
import TextTyper from "../../text/texttyper/TextTyper";

const Hero = () => {
    return (
        <div className={'margin-top-5'}>
            <div className={'hero-background'}>
                <Title/>
                <TextTyper/>
            </div>
        </div>
    )
}

export default Hero;