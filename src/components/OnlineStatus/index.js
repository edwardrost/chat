import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './OnlineStatus.scss';

const OnlineStatus = ({online}) => (
    <span className={classNames('status', {'status--online': online })}>
        {online ? 'online' : 'offline'}
    </span>
);


OnlineStatus.propTypes = {
    online: PropTypes.bool
};

export default OnlineStatus;