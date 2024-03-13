/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['araconsulting.co'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'araconsulting.co',
                port: '443',
                pathname: '/uploads/**',
            }
        ]
    },
};
