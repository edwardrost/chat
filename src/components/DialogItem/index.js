import React from 'react';
// import classNames from 'classnames';
import Time from '../Time';

import './DialogItem.scss';

const DialogItem = ({user, message}) => (
    <div className="dialogs__item">
        <div className="dialogs__item-avatar">
            {/* <img src={user.avatar} alt={`${user.fullname}`} avatar /> */}
            <img 
                src='https://sun1-92.userapi.com/s/v1/ig1/jWybR8qm5YVOOC49CY3PXiddZYGO5m8ayqqlV7S7NtydBBrul4ZmkxV5Dh0LmZvmDTIdFL1W.jpg?size=50x0&quality=96&crop=0,0,1100,1100&ava=1' 
                alt=""
            />
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>Bill Gates</b>
                <span>
                    <Time date={new Date().formatUTC} />
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>We all need people who will give us feedback. That’s how we improve.</p>
            </div>

        </div>
    </div>
);

export default DialogItem;