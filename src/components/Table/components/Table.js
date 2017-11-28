import React from 'react';
import PropTypes from 'prop-types';
import sn from 'classnames';
import '../styles/Table.css';
import { columnsType, itemType } from '../const';
import TableRow from './TableRow';

const Table = ({ title, items, columns, className, itemKey, columnKey }) => {
    return (
        <table className={sn('table', className)}>
            {title != null && <caption className="table__caption">{title}</caption>}
            <thead>
                <tr>
                    <th key="$first" className="table__head table__head--toggle" />
                    {columns.map(col => (
                        <th key={columnKey(col)} className="table__head">
                            {col.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <TableRow key={itemKey(item)} item={item} columns={columns} columnKey={columnKey} />
                ))}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    title: PropTypes.string,
    columns: columnsType,
    items: PropTypes.arrayOf(itemType),
    className: PropTypes.string,
    itemKey: PropTypes.func,
    columnKey: PropTypes.func,
};

Table.defaultProps = {
    columns: [],
    items: [],
    className: '',
    itemKey: item => item.id,
    columnKey: col => col.key || col.name,
};

export default Table;
