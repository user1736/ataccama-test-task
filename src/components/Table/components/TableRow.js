import React from 'react';
import PropTypes from 'prop-types';
import sn from 'classnames';
import '../styles/Table.css';
import { columnsType, itemType } from '../const';
import Button from './Button';

class TableRow extends React.Component {
    static propTypes = {
        item: itemType.isRequired,
        columns: columnsType.isRequired,
        order: PropTypes.oneOf(['even', 'odd']),
        onDelete: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        };

        this._toggle = () => this.setState(state => ({ expanded: !state.expanded }));
    }

    renderRow() {
        const { expanded } = this.state;
        const { item, columns, order, onDelete } = this.props;

        return (
            <tr
                key="row"
                className={sn('table__row', {
                    'table__row--even': order === 'even',
                    'table__row--odd': order === 'odd',
                })}
            >
                <td key="$first" className="table__cell">
                    {!!item.children && <Button text={expanded ? '-' : '+'} onClick={this._toggle} />}
                </td>
                {columns.map(col => (
                    <td key={col.name} className="table__cell">
                        {col.renderItem(item)}
                    </td>
                ))}
                <td key="$last" className="table__cell">
                    <Button text="x" onClick={onDelete} />
                </td>
            </tr>
        );
    }

    renderChildren() {
        const { item: { children }, columns } = this.props;
        if (!this.state.expanded || !children) {
            return null;
        }

        return (
            <tr key="extra">
                <td className="table__cell" colSpan={columns.length + 2}>
                    {children}
                </td>
            </tr>
        );
    }

    render() {
        return [this.renderRow(), this.renderChildren()];
    }
}

export default TableRow;
