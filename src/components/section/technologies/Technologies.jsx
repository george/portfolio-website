import React from 'react';

import './Technologies.scss';

const Technologies = () => {
    return (
        <>
            <ul className={'technology-list'}>
                <li>
                    <i className="fa-brands fa-java fa-3x"></i>
                </li>
                <li>
                    <i className="fa-brands fa-square-js fa-3x"></i>
                </li>
                <li>
                    <i className="fa-brands fa-python fa-3x"></i>
                </li>
                <li>
                    <i className="fa-brands fa-html5 fa-3x"></i>
                </li>
                <li>
                    <i className="fa-brands fa-css3-alt fa-3x"></i>
                </li>
                <li>
                    <i className="fa-brands fa-react fa-3x"></i>
                </li>
                <li>
                    <i className="fa-brands fa-node fa-3x"></i>
                </li>
                <li>
                    <i className="fa-brands fa-docker fa-3x"></i>
                </li>
                <li>
                    <i className="fa-brands fa-linux fa-3x"></i>
                </li>
                <li>
                    <i className="fa-solid fa-database fa-3x"></i>
                </li>
            </ul>
        </>
    )
}

export default Technologies;