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
        ],
    },
};

function toRemotePattern(urlString) {
    const url = new URL(urlString);
    return {
        protocol: url.protocol.replace(':', ''),
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
    };
}
