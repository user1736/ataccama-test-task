const availableSchemas = [
    {
        name: 'patients',
        key: 'root',
        getId: item => item.data['Identification number'],
    },
    {
        name: 'relatives',
        key: 'has_relatives',
        getId: item => item.data['Relative ID'],
    },
    {
        name: 'phones',
        key: 'has_phone',
        getId: item => item.data['Phone ID'],
    },
];

const schemas = availableSchemas.reduce(
    (seed, schema) => ({
        ...seed,
        [schema.key]: schema,
    }),
    {}
);

const getEntityNameByKey = (key) => schemas[key] ? schemas[key].name : null;

export {schemas, getEntityNameByKey};
