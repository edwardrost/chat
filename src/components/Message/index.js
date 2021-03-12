import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import readSvg from '../../assets/img/read.svg';
import unreadSvg from '../../assets/img/unread.svg';



import classNames from 'classnames';

import './Message.scss';

const Message = ({avatar, user, text, date, isMe, isRead }) => (
    <div className={ classNames('message', {'message--isme': isMe}) }>
        <div className="message__content">
            {isMe && isRead && 
                (<img 
                    className="message__icon-read"
                    src={readSvg} 
                    alt="Read Icon"
                />)
            }

            {isMe && !isRead && 
                (<img 
                    className="message__icon-unread"
                    src={unreadSvg} 
                    alt="Unread Icon"
                />)
            }

            <div className="message__avatar">
                <img 
                    src={avatar}
                    alt={`Avatar ${user.fullname}`} 
                />
            </div>

            <div className="message__info">
                <div className="message__bubble">
                    <p className="message__text">{text}</p>
                </div>
                <span className="message__date">{distanceInWordsToNow(date)}</span>               
            </div>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
};

export default Message;