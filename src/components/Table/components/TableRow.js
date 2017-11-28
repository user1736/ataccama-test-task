import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Table.css';
import { columnsType, itemType } from '../const';
import ToggleButton from './ToggleButton';

class TableRow extends React.Component {
    static propTypes = {
        item: itemType.isRequired,
        columns: columnsType.isRequired,
        columnKey: PropTypes.func.isRequired,
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
        const { item, columns, columnKey } = this.props;

        return (
            <tr key="row">
                <td key="$first" className="table__cell">
                    {!!item.children && <ToggleButton opened={expanded} onClick={this._toggle} />}
                </td>
                {columns.map(col => (
                    <td key={columnKey(col)} className="table__cell">
                        {col.renderItem(item)}
                    </td>
                ))}
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
                <td className="table__cell" colSpan={columns.length + 1}>
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
