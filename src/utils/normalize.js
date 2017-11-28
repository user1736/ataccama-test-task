import { schemas } from './schema';

function processItem(item, schema, parent, entities) {
    const { name, getId } = schema;
    if (!entities[name]) {
        entities[name] = {};
    }

    const id = getId(item);
    const normalizedItem = { id, name };
    const kids = normalizeKids(item.kids, normalizedItem, entities);
    entities[name][id] = { ...item, parent, kids };

    return normalizedItem;
}

function normalizeRecords(data, recordKey, parent, entities) {
    const schema = schemas[recordKey];
    if (!schema) {
        console.warn(`Schema "${recordKey}" not found in the definition!`);
        return data;
    }

    return data.map(item => processItem(item, schema, parent, entities));
}

function normalizeKids(data, parent, entities) {
    return Object.keys(data).reduce(
        (result, itemKey) => ({
            ...result,
            [itemKey]: normalizeRecords(data[itemKey].records, itemKey, parent, entities),
        }),
        {}
    );
}

function normalize(data) {
    const entities = {};
    return {
        entities,
        order: data.map(item => processItem(item, schemas.root, null, entities)),
    };
}

export default normalize;
