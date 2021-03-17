import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
// import {generateAvatarFromHash} from '../../utils';
// import Time from '../Time';
import MessageStatusIcon from '../MessageStatusIcon';
import Avatar from '../Avatar';

import './DialogItem.scss';


const getMessageTime = created_at => {
    console.log(created_at, new Date(created_at));
    if(isToday(created_at)) {
        return format(
            new Date(created_at),
            'HH:mm'
        );
    }
    else return format(new Date(created_at), 'DD/MM/YYYY');
}

// const getAvatar = avatar => {
//     if (avatar) {
//         return (
//         <img 
//             src={avatar} 
//             alt=""
//         />);
//     }
//     else {
//         console.log(generateAvatarFromHash("c342cdb7d4ad65f3467f1ab056f1f9c6"))
//     }
// };

const DialogItem = ({user, message, unread, isMe}) => (
    <div className={classNames("dialogs__item",  {
        "dialogs__item--online": message.user.isOnline
    })}>
        <div className="dialogs__item-avatar">
            <Avatar user={message.user} />
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{message.user.fullname}</b>
                <span>
                    {getMessageTime(message.created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>
                    {message.text}
                </p>
                {isMe && <MessageStatusIcon isMe={true} isRead={true} />}
                {unread>0 && (<div className="dialogs__item-info-bottom-count">{unread > 9 ? '>9' : unread}</div>)}
            </div>

        </div>
    </div>
);

export default DialogItem;