import React from 'react';
import ChildTable from '../containers/ChildTable';

const generateColumns = items => {
    const columns = [];

    items.forEach(item => {
        Object.keys(item.data).forEach(dataKey => {
            if (columns.find(col => col.name === dataKey)) {
                return;
            }

            columns.push({
                name: dataKey,
                renderItem: item => item.data[dataKey],
            });
        });
    });

    return columns;
};

const generateItem = (normalizedItem, item) => {
    const { id, name } = normalizedItem;
    const { kids, ...data } = item;
    const childEntities = Object.keys(kids);
    let children;

    if (childEntities.length) {
        children = childEntities.map(title => <ChildTable key={title} title={title} id={id} name={name} />);
    }

    return {
        ...data,
        id,
        children,
    };
};

export { generateColumns, generateItem };
