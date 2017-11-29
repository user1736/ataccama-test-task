import * as actionNames from '../const/action-names';

export const onItemDelete = ({ id, name, parent }) => ({
    type: actionNames.DELETE_ITEM,
    payload: {
        id,
        name,
        parent,
    },
});
