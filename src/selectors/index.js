import { createSelector } from 'reselect';
import { generateItem, generateColumns } from '../utils/tableHelpers';
import { getEntityNameByKey } from '../utils/schema';

const getOrder = state => state.order;
const getRootEntity = state => state.entities.patients;
const getRootViewData = createSelector(getOrder, getRootEntity, (order, patients) => {
    const items = order.map(item => generateItem(item, patients[item.id]));
    const columns = generateColumns(items);

    return { items, columns };
});

const getParentEntity = (state, props) => state.entities[props.parentName][props.parentId];
const getChildEntityKey = (state, props) => props.entityKey;
const getChildOrder = (state, props) => getParentEntity(state, props).kids[getChildEntityKey(state, props)];
const getChildEntity = (state, props) => state.entities[getEntityNameByKey(getChildEntityKey(state, props))];
const getChildViewData = createSelector(
    getChildOrder,
    getChildEntity,
    getChildEntityKey,
    (order, childEntity, childEntityKey) => {
        const items = order.map(item => generateItem(item, childEntity[item.id]));
        const columns = generateColumns(items);

        return { title: childEntityKey, items, columns };
    }
);

export { getRootViewData, getChildViewData };
