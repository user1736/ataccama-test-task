import PropTypes from 'prop-types';

export const columnsType = PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string,
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        renderItem: PropTypes.func,
    })
);

export const itemType = PropTypes.shape({
  children: PropTypes.object,
});
