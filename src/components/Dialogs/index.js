import React from 'react';
// import isToday from 'date-fns/is_today';
import orderBy from 'lodash/orderBy';
// import classNames from 'classnames';

import DialogItem from '../../components/DialogItem';

import './Dialogs.scss';


const Dialogs = ({userId, items}) => (
    <div className="dialogs">
        {orderBy(items, ['created_at'], ['desc']).map(item => (
            <DialogItem
                key={item._id} 
                user={item.user}
                message={item}
                unread={0}
                isMe={item.user._id === userId}
            />
            
            ))
        }        
    </div>    
);

export default Dialogs;