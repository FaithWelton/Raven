import React from 'react';
import PropTypes from 'prop-types';

const TextDisplay = ({ textList }) => (
    <ul>
        {textList.map((text, index) => (
            <li key={index}>{text}</li>
        ))}
    </ul>
);

TextDisplay.propTypes = {
    textList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TextDisplay;