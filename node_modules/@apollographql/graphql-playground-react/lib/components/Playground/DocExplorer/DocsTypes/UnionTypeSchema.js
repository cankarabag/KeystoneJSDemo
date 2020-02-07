"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TypeLink_1 = require("../TypeLink");
var React = require("react");
var DocType_1 = require("./DocType");
var UnionTypeSchema = function UnionTypeSchema(_a) {
  var schema = _a.schema,
      type = _a.type,
      level = _a.level,
      sessionId = _a.sessionId;
  var types = schema.getPossibleTypes(type);
  return React.createElement(
    DocType_1.DocType,
    { className: "doc-type-schema" },
    React.createElement(
      "span",
      { className: "field-name" },
      "union"
    ),
    ' ',
    React.createElement(
      "span",
      { className: "type-name" },
      type.name
    ),
    ' = ',
    types.map(function (value, index) {
      return React.createElement(TypeLink_1.default, { key: value.name, type: value, x: level, y: index + 1, collapsable: true, sessionId: sessionId, lastActive: false });
    })
  );
};
exports.default = UnionTypeSchema;
//# sourceMappingURL=UnionTypeSchema.jsx.map