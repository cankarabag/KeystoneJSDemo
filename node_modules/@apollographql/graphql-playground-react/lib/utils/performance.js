"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var last = null;
// tslint:disable
function log() {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    if (messages.length === 0) {
        last = null;
    }
    if (last) {
        console.log.apply(console, messages.concat([performance.now() - last + "ms"]));
    } else {
        console.log.apply(console, messages);
    }
    last = performance.now();
}
exports.log = log;
//# sourceMappingURL=performance.js.map