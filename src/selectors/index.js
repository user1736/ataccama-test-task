import { createSelector } from 'reselect';
import { generateItem, generateColumns } from '../utils/tableHelpers';

const getOrder = state => state.order;
const getRootEntity = state => state.entities.root;
const getRootViewData = createSelector(getOrder, getRootEntity, (order, root) => {
    const items = order.map(item => generateItem(item, root[item.id]));
    const columns = generateColumns(items);

    return { items, columns };
});

const getParentEntity = (state, props) => state.entities[props.parentName][props.parentId];
const getChildEntityName = (state, props) => props.entityName;
const getChildOrder = (state, props) => getParentEntity(state, props).kids[getChildEntityName(state, props)];
const getChildEntity = (state, props) => state.entities[getChildEntityName(state, props)];
const getChildViewData = createSelector(
    getChildOrder,
    getChildEntity,
    getChildEntityName,
    (order, childEntity, childEntityName) => {
        const items = order.map(item => generateItem(item, childEntity[item.id]));
        const columns = generateColumns(items);

        return { title: childEntityName, items, columns };
    }
);

export { getRootViewData, getChildViewData };
