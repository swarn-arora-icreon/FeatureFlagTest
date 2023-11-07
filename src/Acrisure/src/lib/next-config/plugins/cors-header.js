const { env } = require("process");

const config = require("../../../temp/config") || {};

/**
 * @type {import('next').NextConfig}
 */

const corsHeaderPlugin = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    async headers() {
      return [
        {
          source: "/_next/:path*",
          headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
        },
      ];
    },
  });
};

module.exports = corsHeaderPlugin;
