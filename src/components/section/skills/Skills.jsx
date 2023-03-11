import React from 'react';

import './Skills.scss';

const Skills = () => {
    return (
        <div id={'skills'} className={'top-margin'}>
            <div className={'title'}>
                <h2>Skills</h2>
            </div>

            <span className={'description'}>
                I'm proficient with many technologies, languages, and operating systems, and I'm always looking to learn more.

                <br/>

                <br/>
                <span className={'skill-category'}>
                    Operating Systems: &nbsp;
                </span>
                Windows, CentOS, Ubuntu

                <br/>
                <span className={'skill-category'}>
                    Languages: &nbsp;
                </span>
                Java, JavaScript, C++, Python

                <br/>
                <span className={'skill-category'}>
                    Backend Technologies: &nbsp;
                </span>
                Node.JS, Express, Flask, Docker

                <br/>
                <span className={'skill-category'}>
                    Frontend Technologies: &nbsp;
                </span>
                HTML, CSS, React

                <br/>
                <span className={'skill-category'}>
                    Database Types: &nbsp;
                </span>
                MongoDB, MySQL
            </span>
        </div>
    )
}

export default Skills;