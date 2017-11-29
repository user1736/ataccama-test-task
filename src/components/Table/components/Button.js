import React from 'react';
import PropTypes from 'prop-types';
import sn from 'classnames';
import '../styles/Button.css';

const Button = ({ text, className, onClick }) => (
    <button className={sn('button', className)} onClick={onClick}>
        {text}
    </button>
);

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: '',
    className: '',
    onClick: () => {},
};

export default Button;
