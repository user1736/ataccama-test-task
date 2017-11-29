import * as actionNames from '../const/action-names';

const removeChild = (item, childId, childName) => ({
    ...item,
    kids: {
        ...item.kids,
        [childName]: item.kids[childName].filter(item => item.id !== childId),
    },
});

const rootReducer = (state, action) => {
    if (action.type === actionNames.DELETE_ITEM) {
        const { id, name, parent } = action.payload;
        const { order, entities } = state;

        if (parent === null) {
            return {
                ...state,
                order: order.filter(item => item.id !== id),
            };
        }

        const parentEntity = entities[parent.name];
        const parentItem = parentEntity[parent.id];
        return {
            ...state,
            entities: {
                ...entities,
                [parent.name]: {
                    ...parentEntity,
                    [parent.id]: removeChild(parentItem, id, name),
                },
            },
        };
    }

    return state;
};

export default rootReducer;
