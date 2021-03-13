import React from 'react';
import PropTypes from 'prop-types';

import readSvg from '../../assets/img/read.svg';
import unreadSvg from '../../assets/img/unread.svg';

import './MessageStatusIcon.scss';

const MessageStatusIcon = ({isMe, isRead}) => (
    <div>
        {isMe && isRead &&  
        (<img
            className="message-status__icon-read"
            src={readSvg}
            alt="Read Icon"
        />)}

        {isMe && !isRead && 
        (<img
            className="message-status__icon-unread"
            src={unreadSvg}
            alt="Unread Icon"
        />)}
    </div>    
);

MessageStatusIcon.propTypes = {
    isMe: PropTypes.bool,
    isRead: PropTypes.bool,
};

export default MessageStatusIcon;