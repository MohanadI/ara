/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'araconsulting.co',
                port: '1337',
                pathname: '/uploads/**',
            }
        ]
    },
};
