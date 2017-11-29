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
    const children = Object.keys(kids).reduce(
        (children, entityKey) =>
            kids[entityKey].length
                ? [...children, <ChildTable key={entityKey} parentId={id} parentName={name} entityKey={entityKey} />]
                : children,
        []
    );

    return {
        ...data,
        id,
        children: children.length ? children : undefined,
    };
};

export { generateColumns, generateItem };
