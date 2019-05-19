"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "form", {
  enumerable: true,
  get: function () {
    return _form.default;
  }
});
Object.defineProperty(exports, "layout", {
  enumerable: true,
  get: function () {
    return _layout.default;
  }
});
Object.defineProperty(exports, "column", {
  enumerable: true,
  get: function () {
    return _column.default;
  }
});
Object.defineProperty(exports, "element", {
  enumerable: true,
  get: function () {
    return _element.default;
  }
});
Object.defineProperty(exports, "component", {
  enumerable: true,
  get: function () {
    return _component.default;
  }
});
Object.defineProperty(exports, "PromiseComponent", {
  enumerable: true,
  get: function () {
    return _component2.Component;
  }
});
exports.default = void 0;

var _form = _interopRequireDefault(require("./form"));

var _layout = _interopRequireDefault(require("./layout"));

var _column = _interopRequireDefault(require("./column"));

var _element = _interopRequireDefault(require("./element"));

var _component = _interopRequireDefault(require("./component"));

var _component2 = require("./utils/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  form: _form.default,
  layout: _layout.default,
  column: _column.default,
  element: _element.default,
  component: _component.default,
  PromiseComponent: _component2.Component
};
exports.default = _default;
//# sourceMappingURL=index.js.map
