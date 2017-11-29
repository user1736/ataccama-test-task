import React from 'react';
import PropTypes from 'prop-types';
import sn from 'classnames';
import '../styles/Table.css';
import { columnsType, itemType } from '../const';
import TableRow from './TableRow';

const Table = ({ title, items, columns, className }) => {
    return (
        <table className={sn('table', className)}>
            {title != null && <caption className="table__caption">{title}</caption>}
            <thead>
                <tr>
                    <th key="$first" className="table__head table__head--toggle" />
                    {columns.map(col => (
                        <th key={col.name} className="table__head">
                            {col.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => (
                    <TableRow key={item.id} item={item} columns={columns} order={i % 2 === 0 ? 'even' : 'odd'} />
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
};

Table.defaultProps = {
    columns: [],
    items: [],
    className: '',
};

export default Table;
