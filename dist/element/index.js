"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Title", {
  enumerable: true,
  get: function () {
    return _title.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _button.default;
  }
});
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function () {
    return _box.default;
  }
});
exports.default = void 0;

var _title = _interopRequireDefault(require("./title"));

var _button = _interopRequireDefault(require("./button"));

var _box = _interopRequireDefault(require("./box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Title: _title.default,
  Button: _button.default,
  Box: _box.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map
