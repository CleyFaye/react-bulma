"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class = require("../utils/class");

var _modifier = require("../utils/modifier");

var _props = require("../utils/props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Props:
 * - fullwidth
 * - inverted
 * - rounded
 * - outlined
 * - loading
 * - static
 * - disabled
 * - onClick
 */
class Button extends _react.default.Component {
  render() {
    const classes = ["button"];
    (0, _modifier.bringAll)(classes, this.props);
    (0, _class.addClassesFromOptions)(classes, this.props, undefined, ["fullwidth", "inverted", "rounded", "outlined", "loading", "static"]);
    return _react.default.createElement("button", {
      className: (0, _class.classString)(classes, this.props.className),
      disabled: this.props.disabled,
      onClick: this.props.onClick
    }, this.props.children);
  }

}

exports.default = Button;
Button.propTypes = {
  className: _props.classNamePropType,
  fullwidth: _propTypes.default.bool,
  inverted: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  outlined: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  static: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  children: _propTypes.default.node,
  ..._props.allModifiersPropList
};
/**
 * Props:
 * - joined: attach buttons together
 * - align: either "left", "center" or "right"
 */

class List extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = ["buttons"];

    if (this.props.joined) {
      classes.push("has-addons");
    }

    if (this.props.align === "center") {
      classes.push("is-centered");
    } else if (this.props.align === "right") {
      classes.push("is-right");
    }

    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.List = List;
List.propTypes = {
  className: _props.classNamePropType,
  joined: _propTypes.default.bool,
  align: _propTypes.default.string,
  children: _propTypes.default.node
};
Button.List = List;
//# sourceMappingURL=button.js.map
