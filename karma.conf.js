module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: ["test/*.js"],
    preprocessors: {
      "test/*.js": ["webpack"],
    },
    reporters: ["progress"],
    browsers: ["ChromeHeadless"],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    webpack: {},
    webpackMiddleware: {
      stats: "errors-only",
    },
  });
};
