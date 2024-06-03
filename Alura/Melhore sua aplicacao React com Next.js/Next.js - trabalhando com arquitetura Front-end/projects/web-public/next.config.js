const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@lucas/utils",
  "@lucas/design-system",
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
