function parseURL(url) {
    try {
        const parsedURL = new URL(url);
        return {
            protocol: parsedURL.protocol,
            hostname: parsedURL.hostname,
            port: parsedURL.port,
            pathname: parsedURL.pathname,
            search: parsedURL.search,
            hash: parsedURL.hash,
            href: parsedURL.href
        };
    } catch (error) {
        console.error('Invalid URL:', error);
        return null;
    }
}

const url = 'https://www.kilimall.co.ke/product/12345?utm_source=google&utm_medium=cpc#specifications';
const parsed = parseURL(url);
console.log(parsed);
