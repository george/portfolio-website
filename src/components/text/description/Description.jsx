import React from 'react';
import TextTyper from '../texttyper/TextTyper';

import './Description.scss';

const Description = () => {
    return (
        <p className={'description'}>
            <TextTyper />
        </p>
    )
}

export default Description;