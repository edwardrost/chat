import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { SmileOutlined, PaperClipOutlined, SendOutlined } from '@ant-design/icons';

// import classNames from 'classnames';

import './ChatInput.scss';


const ChatInput = props => (
    <div className="chat-input">
        <div className="chat-input__btn">
            <SmileOutlined style={{fontSize: '20px'}} />
        </div>
        <Input 
            placeholder="Write a message ..." 
            size="large" 
        />
        <div className="chat-input__actions">
        <div className="chat-input__btn">
            <PaperClipOutlined style={{fontSize: '20px'}} />
        </div>

        <div className="chat-input__btn">
            <SendOutlined style={{fontSize: '20px'}} />
        </div> 
        </div>
    </div>    
);

ChatInput.propTypes = {
    className: PropTypes.string,
}

export default ChatInput;