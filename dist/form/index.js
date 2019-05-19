"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Field", {
  enumerable: true,
  get: function () {
    return _field.default;
  }
});
Object.defineProperty(exports, "Label", {
  enumerable: true,
  get: function () {
    return _label.default;
  }
});
Object.defineProperty(exports, "Control", {
  enumerable: true,
  get: function () {
    return _control.default;
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function () {
    return _input.default;
  }
});
Object.defineProperty(exports, "Textarea", {
  enumerable: true,
  get: function () {
    return _textarea.default;
  }
});
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: function () {
    return _select.default;
  }
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function () {
    return _checkbox.default;
  }
});
exports.default = void 0;

var _field = _interopRequireDefault(require("./field"));

var _label = _interopRequireDefault(require("./label"));

var _control = _interopRequireDefault(require("./control"));

var _input = _interopRequireDefault(require("./input"));

var _textarea = _interopRequireDefault(require("./textarea"));

var _select = _interopRequireDefault(require("./select"));

var _checkbox = _interopRequireDefault(require("./checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Field: _field.default,
  Label: _label.default,
  Control: _control.default,
  Input: _input.default,
  Textarea: _textarea.default,
  Select: _select.default,
  Checkbox: _checkbox.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map
