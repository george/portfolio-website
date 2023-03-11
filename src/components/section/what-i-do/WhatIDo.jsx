import React from 'react';
import Technologies from "../technologies/Technologies";

const WhatIDo = () => {
    return (
        <div id={'what-i-do'} className={'top-margin'}>
            <div className={'title'}>
                <h2>What I do</h2>
            </div>

            <span className={'description'}>
                <ul>
                    <li>⚡ Develop powerful, scalable, and efficient software solutions</li>
                    <li>⚡ Create optimized and stable products</li>
                    <li>⚡ Design powerful, production ready systems</li>
                </ul>
            </span>

            <Technologies/>
        </div>
    )
}

export default WhatIDo;