const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/web_login',
        createProxyMiddleware({
            target: 'http://localhost:7000',
            changeOrigin: true,
            // pathRewrite: { "^/api": "" }
        })
    );
};