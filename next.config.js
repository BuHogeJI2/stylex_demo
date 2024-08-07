/** @type {import('next').NextConfig} */
const path = require('path');
const stylexPlugin = require("@stylexjs/nextjs-plugin");
const babelrc = require('./.babelrc.js');
const plugins = babelrc.plugins;
const [_name, options] = plugins.find(
  (plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin',
);
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;
const aliases = options.aliases ?? undefined;
const useCSSLayers = options.useCSSLayers ?? undefined;

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

module.exports = stylexPlugin({
  rootDir, aliases, useCSSLayers
})(nextConfig);
