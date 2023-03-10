import React from 'react';
import ExperienceCard from '../../card/ExperienceCard';

const Experiences = () => {
    return (
        <>
            <div id='experiences' className={'title'}>
                <h2>Experiences</h2>
            </div>

            <ExperienceCard companyName={'Senior Studios, AB'} color={'#048cde'} companyImage={'/logos/senior-studios.webp'}
                            dates={'February, 2020 - February, 2021'} role={'Freelance Software Engineer'} description={
                [
                    'Developed a wide variety of time-sensitive projects for a broad and diverse customer-base, primarily ' +
                    'using Java',
                    'Demonstrated strong time and self management skills through freelance development work'
                ]
            }/>
            <ExperienceCard companyName={'PurplePrison, LLC'} color={'#861ea8'} companyImage={'/logos/purple-prison.png'}
                            dates={'October, 2020 - September, 2022'} role={'Software Engineer'} description={
                [
                    'Created highly scalable and efficient production-level projects using Java for hundreds of concurrent players',
                    'Developed core elements of gameplay while maintaining high server performance'
                ]
            }/>
            <ExperienceCard companyName={'Hostile'} color={'#1563CB'} companyImage={'/logos/hostile.ico'}
                            dates={'April, 2022 - Present'} role={'Software Engineer & Project Manager'} description={
                [
                    'Led development for the backend for a powerful OSINT website using Flask, MongoDB, and Nginx',
                    'Helped develop and maintain a React based frontend',
                    'Created powerful OSINT tools utilizing web scraping'
                ]
            }/>
        </>
    )
}

export default Experiences;