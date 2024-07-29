/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin");
const withMDX = require("@next/mdx")();

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = stylexPlugin({
  rootDir: __dirname,
  dev: process.env.NODE_ENV === 'development',
})(withMDX(nextConfig));
