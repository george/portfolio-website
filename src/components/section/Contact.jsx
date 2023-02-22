import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
            <div id='contact' className={'title'}>
                <h2>Contact Me</h2>
            </div>

            <span className={'description'}>
                The best way to contact me is via <a href={'mailto:george@george.ong'}>email</a>, however I
                can be reached via <a href={'https://t.me/gardening_tool'}>Telegram</a>, which is where I
                reply fastest.
            </span>
        </div>
    )
}

export default Contact;