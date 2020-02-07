"use strict";

function _interopDefault(ex) {
  return ex && "object" == typeof ex && "default" in ex ? ex.default : ex;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var pirates = require("pirates"), babel = require("@babel/core"), sourceMapSupport = _interopDefault(require("source-map-support"));

let EXTENSIONS = [ ".js", ".jsx", ".ts", ".tsx" ], babelPlugins = [ require.resolve("@babel/plugin-transform-modules-commonjs") ], ___internalHook = cwd => {
  let compiling = !1, sourceMaps = {}, needsToInstallSourceMapSupport = !0;
  return pirates.addHook(function(code, filename) {
    if (compiling) return code;
    needsToInstallSourceMapSupport && (sourceMapSupport.install({
      environment: "node",
      retrieveSourceMap(source) {
        let map = sourceMaps[source];
        return void 0 !== map ? {
          url: source,
          map: map
        } : null;
      }
    }), needsToInstallSourceMapSupport = !1);
    try {
      compiling = !0;
      let output = babel.transformSync(code, {
        plugins: babelPlugins,
        filename: filename,
        sourceMaps: "both",
        cwd: cwd
      });
      return sourceMaps[filename] = output.map, output.code;
    } finally {
      compiling = !1;
    }
  }, {
    exts: EXTENSIONS
  });
};

exports.___internalHook = ___internalHook;
