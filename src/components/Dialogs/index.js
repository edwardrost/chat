import React from 'react';
import orderBy from 'lodash/orderBy';
import { Input } from 'antd';

import DialogItem from '../../components/DialogItem';

import './Dialogs.scss';

const { Search } = Input;

const Dialogs = ({userId, items, onSearch}) => (
    <div className="dialogs">
        <div className="dialogs__item-search">
            <Search placeholder="type the name" allowClear onSearch={onSearch} style={{ width: "100%" }} />
        </div>
        {orderBy(items, ['created_at'], ['desc']).map(item => (
            <DialogItem
                key={item._id} 
                user={item.user}
                message={item}
                unread={0}
                isMe={item.user._id === userId}
            />
        ))}        
    </div>    
);

export default Dialogs;