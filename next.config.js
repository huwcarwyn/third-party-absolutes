const withTM = require("next-transpile-modules");

module.exports = withTM(["package-with-absolutes"])({
  reactStrictMode: true,
});
