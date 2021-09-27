//
// See https://cli.vuejs.org/config/
//

process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  publicPath:
    process.env.VUE_APP_BASEPATH !== undefined
      ? process.env.VUE_APP_BASEPATH
      : "/",
};
