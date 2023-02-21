import React from 'react';
import Title from '../text/Title';
import Description from '../text/Description';
import AirplaneGif from '../media/AirplaneGif';
import Education from './Education';
import Skills from './Skills';
import WhatIDo from './WhatIDo';
import Experiences from './Experiences'

const Hero = () => {
    return (
        <>
            <div className='left-margin'>
                <Title />
                <Description />

                <AirplaneGif/>
                <Education/>
                <Skills />
                <WhatIDo />

                <Experiences/>
            </div>
        </>
    )
}

export default Hero;