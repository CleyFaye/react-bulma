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

var _children = require("../utils/children");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Props:
 * - className
 * - All bulma modifiers
 */
class Label extends _react.default.Component {
  renderChildren() {
    return (0, _children.renderChildrenWithProps)(this.props, {
      size: true
    });
  }

  render() {
    const classes = ["label"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("label", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.default = Label;
Label.propTypes = {
  className: _props.classNamePropType,
  children: _propTypes.default.node,
  ..._props.allModifiersPropList
};
//# sourceMappingURL=label.js.map
