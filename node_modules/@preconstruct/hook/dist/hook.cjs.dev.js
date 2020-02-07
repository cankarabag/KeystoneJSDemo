'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var pirates = require('pirates');
var babel = require('@babel/core');
var sourceMapSupport = _interopDefault(require('source-map-support'));

let EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];
let babelPlugins = [require.resolve("@babel/plugin-transform-modules-commonjs")];
let ___internalHook = cwd => {
  let compiling = false;
  let sourceMaps = {};
  let needsToInstallSourceMapSupport = true;

  function compileHook(code, filename) {
    if (compiling) return code; // we do this lazily because jest has its own require implementation
    // which means preconstruct's require hook won't be run
    // so we don't want to install source map support because that will mess up
    // jest's source map support

    if (needsToInstallSourceMapSupport) {
      sourceMapSupport.install({
        environment: "node",

        retrieveSourceMap(source) {
          let map = sourceMaps[source];

          if (map !== undefined) {
            return {
              url: source,
              map
            };
          } else {
            return null;
          }
        }

      });
      needsToInstallSourceMapSupport = false;
    }

    try {
      compiling = true;
      let output = babel.transformSync(code, {
        plugins: babelPlugins,
        filename,
        sourceMaps: "both",
        cwd
      });
      sourceMaps[filename] = output.map;
      return output.code;
    } finally {
      compiling = false;
    }
  }

  return pirates.addHook(compileHook, {
    exts: EXTENSIONS
  });
};

exports.___internalHook = ___internalHook;
