import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul className={"nav-links"}>
                <li className={"nav-link"}>
                    <a href={"#skills"}>Skills</a>
                </li>
                <li className={"nav-link"}>
                    <a href={"#technologies"}>Technologies</a>
                </li>
                <li className={"nav-link"}>
                    <a href={"#education"}>Education</a>
                </li>
                <li className={"nav-link"}>
                    <a href={"#experiences"}>Experiences</a>
                </li>
                <li className={"nav-link"}>
                    <a href={"#contact"}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;