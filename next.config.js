/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ["araconsulting.co"],
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
