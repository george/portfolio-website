import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import './TextTyper.scss';

const TextTyper = () => {
    return (
        <TypeAnimation sequence={[
            500,
            'A passionate software engineer from Houston, Texas.',
            2500,
            'An experienced and versatile developer.',
            2500,
            'An avid learner of all things computers.',
            2500
        ]} className={'text-typer'} repeat={Infinity} style={{ fontSize: '1.5em' }}>
        </TypeAnimation>
    )
}

export default TextTyper;