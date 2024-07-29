/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin");

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

module.exports = stylexPlugin({
  rootDir: __dirname,
  dev: process.env.NODE_ENV === 'development',
})(nextConfig);