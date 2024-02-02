import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url = 'http://localhost:1337/api/products'
    + '?' + qs.stringify({
        filters: { title: { $eq: "SAP Business One" } },
        fields: ['title', 'description', 'publishedAt'],
        populate: { image: { fields: ['url'] }, modules: { fields: ['title', 'description'] }, methodologies: { fields: ['title', 'description'] }, benefits: { fields: ['title', 'description'] } },
        sort: ['publishedAt:asc'],
        pagination: { pageSize: 10 },
    }, { encodeValuesOnly: true });
console.log('url:', url);
const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-response-products.json';
writeFileSync(file, formatted, 'utf8');