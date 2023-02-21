import React from 'react';

const ExperienceCard = ({ companyName, companyImage, role, color, dates, description}) => {
    const ConvertDescriptionToBullets = (contents) => {
        return contents.map((content) => {
            return <li>
                {content}
            </li>
        })
    }

    return (
        <>
            <ul className={'show-bullets'}>
                {ConvertDescriptionToBullets(description)}
            </ul>
        </>
    )
}

export default ExperienceCard;