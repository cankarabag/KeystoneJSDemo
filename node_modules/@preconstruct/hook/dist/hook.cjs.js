'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./hook.cjs.prod.js");
} else {
  module.exports = require("./hook.cjs.dev.js");
}
