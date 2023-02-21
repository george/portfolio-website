import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TextTyper = () => {
    return (
        <TypeAnimation sequence={[
            500,
            'A passionate software engineer from Houston, Texas',
            1000,
            'An experienced amd versatile developer, working with Python, JavaScript, Java, and C++.',
            1000,
            'An avid learner of anything computer related',
            1000
        ]} repeat={Infinity} style={{ fontSize: '1.5em' }}>
        </TypeAnimation>
    )
}

export default TextTyper;