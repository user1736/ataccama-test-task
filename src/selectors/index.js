import { createSelector } from 'reselect';
import { generateItem, generateColumns } from '../utils/tableHelpers';

const getOrder = state => state.order;
// const getEntities = (state, props) => state.entities[props.name];
const getRootEntity = state => state.entities.patients;
// const getEntity = (state, props) => getEntities(state, props)[props.id];

const getRootViewData = createSelector(getOrder, getRootEntity, (order, patients) => {
    const items = order.map(item => generateItem(item, patients[item.id]));
    const columns = generateColumns(items);

    return { items, columns };
});

export { getRootViewData };
