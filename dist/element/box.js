"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class = require("../utils/class");

var _modifier = require("../utils/modifier");

var _props = require("../utils/props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Props:
 * - All Bulma modifiers
 */
class Box extends _react.default.Component {
  render() {
    const classes = ["box"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.default = Box;
Box.propTypes = {
  className: _props.classNamePropType,
  children: _propTypes.default.node,
  ..._props.allModifiersPropList
};
//# sourceMappingURL=box.js.map
