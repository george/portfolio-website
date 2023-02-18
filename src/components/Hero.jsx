import React from 'react';
import Title from './Title';
import Description from './Description';
import AirplaneGif from './AirplaneGif';
import Button from './Button';
import Education from './Education';
import Skills from './Skills';

const Hero = () => {
    return (
        <>
            <div className='left-margin'>
                <Title />
                <Description />

                <div className={'center padding'}>
                    <Button title={'Contact Me'} href={'#contact'}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className={'float-right'} title={'Resume'} href={'/public/resume.pdf'}/>
                </div>

                <AirplaneGif/>
                <Education/>
                <Skills />
            </div>
        </>
    )
}

export default Hero;