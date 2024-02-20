import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url = 'http://localhost:1337/api/blogs'
    + '?' + qs.stringify({
        filters: {},
        fields: ['slug', 'title', 'sub_title', 'body', 'publishedAt'],
        populate: { image: { fields: ['url', 'alternativeText'] } },
        sort: ['publishedAt:asc'],
        pagination: { pageSize: 10 },
    }, { encodeValuesOnly: true });

const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/blogs-response.json';
writeFileSync(file, formatted, 'utf8');