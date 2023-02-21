import React from 'react';
import Logo from '../media/Logo';

const Skills = () => {
    return (
        <div id={'skills'} className={'top-margin'}>
            <div className={'title'}>
                <h2>Skills</h2>
            </div>

            <span className={'description'}>
                I'm proficient with many technologies, languages, and operating systems, and I'm always looking to learn more.

                <ul className={'technology-list'}>
                    <li>
                        <Logo src={'/logos/java.png'} alt={'java'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/python.png'} alt={'python'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/javascript.png'} alt={'javascript'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/cplusplus.svg'} alt={'cplusplus'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/nodejs.png'} alt={'nodejs'} width={128}/>
                    </li>
                    <li>
                        <Logo src={'/logos/css.png'} alt={'css'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/html.png'} alt={'html'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/centos.png'} alt={'centos'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/ubuntu.png'} alt={'ubuntu'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/docker.webp'} alt={'docker'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/express.png'} alt={'express'} width={140}/>
                    </li>
                    <li>
                        <Logo src={'/logos/flask.png'} alt={'flask'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/react.png'} alt={'react'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/mysql.png'} alt={'mysql'}/>
                    </li>
                    <li>
                        <Logo src={'/logos/mongodb.png'} alt={'mongodb'} width={164}/>
                    </li>
                </ul>
            </span>
        </div>
    )
}

export default Skills;