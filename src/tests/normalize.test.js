import { schemas } from '../utils/schema';
import { normalize } from '../utils/normalize';

const phoneItem = {
    data: {
        'Phone ID': '2008',
        'ID of the relative': '1007',
        Phone: '+(179)-982-0570',
    },
    kids: {},
};

const relativeItem = {
    data: {
        'Relative ID': '1007',
        'Patient ID': '34',
        'Is alive?': 'true',
        'Frequency of visits': '29',
    },
    kids: {
        has_phone: {
            records: [phoneItem],
        },
    },
};

const patientItem = {
    data: {
        'Identification number': '34',
        Name: 'Joqmo',
        Gender: 'female',
        Risk: 'BITES',
        'Hair length': '6.2000000000',
        IQ: '98',
        'Admission date': 'Mon Dec 13 00:00:00 CET 1993',
        'Last breakdown': 'Wed Dec 24 07:14:50 CET 2014',
        'Yearly fee': '67035',
        'Knows the Joker?': 'true',
    },
    kids: {
        has_relatives: {
            records: [relativeItem],
        },
    },
};

const testMap = {
    patients: patientItem,
    relatives: relativeItem,
    phones: phoneItem,
};
const sampleData = [patientItem];

it('result has order key', () => {
    const { order } = normalize(sampleData);
    expect(order.length).toBe(1);
    expect(order.every(item => item.id != null && item.name != null)).toBe(true);
});

Object.keys(schemas).forEach(schemaKey => {
    const schema = schemas[schemaKey];
    it(`supports "${schema.name}" schema`, () => {
        const { entities } = normalize(sampleData);
        const entity = entities[schema.name];
        const item = testMap[schema.name];

        expect(entity[schema.getId(item)].data).toEqual(item.data);
    });
});
