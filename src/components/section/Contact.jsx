import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
            <div id='contact' className={'title'}>
                <h2>Contact Me</h2>
            </div>

            <span className={'description'}>
                The easiest way to contact me is via <a href={'mailto:george@george.ong'}>email</a>, however I
                can also be reached via <a href={'https://t.me/gardening_tool'}>Telegram</a>, which is where I
                usually reply fastest.
            </span>
        </div>
    )
}

export default Contact;