import React from 'react';
import PropTypes from 'prop-types';
import Time from '../Time';
import MessageStatusIcon from '../MessageStatusIcon';


import classNames from 'classnames';

import './Message.scss';

const Message = ({ avatar, user, text, date, isMe, isRead, attachments, isTyping }) => (
    <div className={classNames('message', { 
        'message--isme': isMe, 
        'message--is-typing': isTyping 
        })}
    >
        <div className="message__content">
            <MessageStatusIcon 
                isMe={isMe}
                isRead={isRead}
            />
            {/* {isMe && isRead &&
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
            } */}

            <div className="message__avatar">
                <img
                    src={avatar}
                    alt={`Avatar ${user.fullname}`}
                />
            </div>

            <div className="message__info">
                <div>
                    {text && (
                        <div className="message__bubble">
                            {text && (<p className="message__text">{text}</p>)}
                        </div>)
                    }
                    <div  className="message__attachments">
                        {attachments &&
                            attachments.map((item, index) => (
                                <div key={index} className="message__attachments-item">
                                    <img
                                        src={item.url}
                                        alt={item.filename}
                                    />
                                </div>
                        ))}
                    </div>
                    {date && (
                        <span className="message__date">
                            <Time date={date} />
                        </span>)}
                    {!text && (<div className="message__typing">
                            <div className="dot one"></div>
                            <div className="dot two"></div>
                            <div className="dot three"></div> 
                        </div>)
                    }
                </div>
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
    attachments: PropTypes.array,
    isTyping: PropTypes.bool
};

export default Message;