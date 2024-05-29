const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@lucas/design-system",
  "@lucas/utils",
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
