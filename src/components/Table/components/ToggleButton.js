import React from 'react';
import PropTypes from 'prop-types';
import sn from 'classnames';
import '../styles/ToggleButton.css';

const ToggleButton = ({ opened, className, onClick }) => (
    <button className={sn('toggle-button', className)} onClick={onClick}>
        {opened ? '-' : '+'}
    </button>
);

ToggleButton.propTypes = {
    opened: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

ToggleButton.defaultProps = {
    opened: false,
    className: '',
    onClick: () => {},
};

export default ToggleButton;
