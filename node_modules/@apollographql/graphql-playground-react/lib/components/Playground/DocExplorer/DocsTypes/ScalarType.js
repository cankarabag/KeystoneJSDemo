"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DocType_1 = require("./DocType");
var ScalarTypeSchema = function ScalarTypeSchema(_a) {
  var type = _a.type;
  return React.createElement(
    DocType_1.DocType,
    { className: "doc-type-schema" },
    React.createElement(
      "span",
      { className: "field-name" },
      "scalar"
    ),
    ' ',
    React.createElement(
      "span",
      { className: "type-name" },
      type.name
    )
  );
};
exports.default = ScalarTypeSchema;
//# sourceMappingURL=ScalarType.jsx.map