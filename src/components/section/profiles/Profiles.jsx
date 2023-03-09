import React from 'react';
import SocialMedia from '../../media/socialmedia/SocialMedia';

const Profiles = () => {
    return (
        <div className={'social-media-accounts'}>
            <div id='profiles' className={'title'}>
                <h2>Profiles</h2>
            </div>

            <SocialMedia path={'/logos/chess.com.png'} backgroundColor={'#64943c'}
                         platformName={'chess.com'} url={'https://chess.com/member/Glove'}/>
            <SocialMedia path={'/logos/github.png'} backgroundColor={'#ffffff'}
                         platformName={'chess.com'} url={'https://github.com/george'}/>
            <SocialMedia path={'/logos/telegram.png'} backgroundColor={'#2cacdc'}
                         platformName={'telegram'} url={'https://t.me/Gardening_Tool'}/>
        </div>
    )
}

export default Profiles;