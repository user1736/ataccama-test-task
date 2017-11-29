const availableSchemas = [
    {
        name: 'root',
        getId: item => item.data['Identification number'],
    },
    {
        name: 'has_relatives',
        getId: item => item.data['Relative ID'],
    },
    {
        name: 'has_phone',
        getId: item => item.data['Phone ID'],
    },
];

const schemas = availableSchemas.reduce(
    (seed, schema) => ({
        ...seed,
        [schema.name]: schema,
    }),
    {}
);

export {schemas};
