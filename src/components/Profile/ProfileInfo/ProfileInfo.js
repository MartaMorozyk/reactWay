import React from 'react';
import cl from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={cl.banner}>
                <img src={'https://coverfiles.alphacoders.com/992/99245.jpg'} />
            </div>
            <div className={cl.descriptionBlock}>
                <img src={'https://i.pinimg.com/236x/8e/45/a3/8e45a3202b227a2d3fde2e1dae76d576.jpg'}/>
                Marta M.
            </div>
        </div>);
};

export default ProfileInfo;