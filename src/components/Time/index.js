import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';


import './Time.scss';

const Time = ({date}) => distanceInWordsToNow(date);

Time.propTypes = {
    date: PropTypes.string
};

export default Time;