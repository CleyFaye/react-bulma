"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _modifier = require("../utils/modifier");

var _props = require("../utils/props");

var _class = require("../utils/class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
class Footer extends _react.default.Component {
  render() {
    const classes = ["footer"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("footer", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.default = Footer;
Footer.propTypes = {
  className: _props.classNameProptype,
  ..._props.allModifiersPropList,
  children: _propTypes.default.node
};
//# sourceMappingURL=footer.js.map
