import React from 'react';

import Title from '../../text/title/Title';
import Description from '../../text/description/Description';
import AirplaneGif from '../../media/airplane/AirplaneGif';
import Education from '.././education/Education';
import Skills from '.././skills/Skills';
import WhatIDo from '.././what-i-do/WhatIDo';
import Experiences from '.././experiences/Experiences'
import Contact from '.././contact/Contact';
import Profiles from '.././profiles/Profiles';

import './Hero.scss';

const Hero = () => {
    return (
        <>
            <div className={'left-margin'}>
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