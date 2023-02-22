import React from 'react';

const ExperienceCard = ({ companyName, companyImage, role, color, dates, description}) => {
    const ConvertDescriptionToBullets = (contents) => {
        return contents.map((content) => {
            return <li>
                ⚡ {content}
            </li>
        })
    }

    return (
        <>
            <div style={{background: color}} className={'card'}>
                <span className={'card-title'}>
                    {companyName}
                </span>

                <img style={{background: color}} className={'card-image'}
                     src={companyImage} alt={companyName} width={128} height={128}/>

                <div style={{background: 'rgb(18, 24, 36)'}} className={'card-bottom'}>
                    <div className={'card-subtext'}>
                        {role}
                    </div>
                    <div className={'card-dates'}>
                        {dates}
                    </div>

                    <div className={'card-description'}>
                        <ul>
                            {ConvertDescriptionToBullets(description)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceCard;