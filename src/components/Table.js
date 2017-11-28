import React from 'react';
import PropTypes from 'prop-types';
import sn from 'classnames';
import '../styles/Table.css';
import ToggleButton from './ToggleButton';

const Table = ({ title, items, columns, className, itemKey, colKey }) => {
    return (
        <table className={sn('table', className)}>
            {title != null && <caption className="table__caption">{title}</caption>}
            <thead>
                <tr>
                    <th key="$first" className="table__head table__head--toggle" />
                    {columns.map(col => (
                        <th key={colKey(col)} className="table__head">
                            {col.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => (
                    <tr key={itemKey(item)}>
                        <td key="$first" className="table__cell">
                            <ToggleButton />
                        </td>
                        {columns.map(col => (
                            <td key={colKey(col)} className="table__cell">
                                {col.renderItem(item, i)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    title: PropTypes.string,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            renderItem: PropTypes.func,
        })
    ),
    items: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string,
    itemKey: PropTypes.func,
    columnKey: PropTypes.func,
};

Table.defaultProps = {
    columns: [],
    items: [],
    className: '',
    itemKey: item => item.id,
    colKey: col => col.key || col.name,
};

export default Table;
