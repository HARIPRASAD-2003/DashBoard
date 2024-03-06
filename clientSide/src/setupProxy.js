// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/leetcode',
    createProxyMiddleware({
      target: 'https://leetcode.com',
      changeOrigin: true,
    })
  );
};
