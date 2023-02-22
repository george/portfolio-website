import React from 'react';
import Title from '../text/Title';
import Description from '../text/Description';
import AirplaneGif from '../media/AirplaneGif';
import Education from './Education';
import Skills from './Skills';
import WhatIDo from './WhatIDo';
import Experiences from './Experiences'
import Contact from './Contact';
import Profiles from './Profiles';

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
                <Profiles />

                <Experiences/>
                <Contact />
            </div>
        </>
    )
}

export default Hero;