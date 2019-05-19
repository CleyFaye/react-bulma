"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonList = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO Use Button.List instead of ButtonList

/**
 * Props:
 * - label
 * - color (see bulma.colorToClass()) (default to "primary")
 * - size (see bulma.sizeToClass()) (default to "normal")
 * - fullwidth
 * - inverted
 * - rounded
 * - loading
 * - onClick
 */
class Button extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonClasses = ["button"];
    (0, _utils.commonModifiers)(this.props, buttonClasses);

    if (this.props.rounded) {
      buttonClasses.push("is-rounded");
    }

    return _react.default.createElement("a", {
      onClick: this.props.onClick,
      className: buttonClasses.join(" ")
    }, this.props.label);
  }

}

exports.Button = Button;
Button.propTypes = {
  label: _propTypes.default.string,
  color: _propTypes.default.string,
  size: _propTypes.default.string,
  fullwidth: _propTypes.default.bool,
  inverted: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
/**
 * Props:
 * - joined: attach buttons together
 * - align: either "left", "center" or "right"
 */

class ButtonList extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonsClasses = ["buttons"];

    if (this.props.joined) {
      buttonsClasses.push("has-addons");
    }

    if (this.props.align === "center") {
      buttonsClasses.push("is-centered");
    } else if (this.props.align === "right") {
      buttonsClasses.push("is-right");
    }

    return _react.default.createElement("div", {
      className: buttonsClasses.join(" ")
    }, this.props.children);
  }

}

exports.ButtonList = ButtonList;
ButtonList.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  joined: _propTypes.default.bool,
  align: _propTypes.default.string
};
//# sourceMappingURL=button.js.map
