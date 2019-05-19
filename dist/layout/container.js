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
 * - className
 * - fluid
 * - breakpoint: if specified the container will be fullwidth until the
 *   specified breakpoint (only work with fullhd and widescreen)
 * - All bulma modifiers
 */
class Container extends _react.default.Component {
  render() {
    const classes = ["container"];
    (0, _modifier.bringAll)(classes, this.props);
    (0, _class.addBreakpoint)(classes, this.props.breakpoint);

    if (this.props.fluid) {
      classes.push("is-fluid");
    }

    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.default = Container;
Container.propTypes = {
  fluid: _propTypes.default.bool,
  className: _props.classNamePropType,
  breakpoint: _props.breakpointPropType,
  ..._props.allModifiersPropList,
  children: _propTypes.default.node
};
//# sourceMappingURL=container.js.map
