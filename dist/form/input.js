"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _controlledinput = _interopRequireDefault(require("./controlledinput"));

var _class = require("../utils/class");

var _modifier = require("../utils/modifier");

var _props = require("../utils/props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Props:
 * - className
 * - type("text", "password", "email", "tel", "number") :default to "text"
 * - placeholder
 * - stateName: Name of the property referenced in stateObj.state. If not
 * provided will default to name.
 * - name: HTML name property for the form
 * - stateObj: object with both state and setState to handle updates
 * - static
 * - disabled
 * - value*: updated using stateObj.state[propName]
 * - readonly*: updated using stateObj.state["readonly"]
 * - inputRef: ref to pass to the actual input element
 * - onChange: handle change on the input
 * - All Bulma modifiers
 *
 * Values marked with a star are replaced by value from context if applicable.
 * If stateObj is provided, it will get updates to the state as needed
 * automatically.
 */
class Input extends _controlledinput.default {
  _getType() {
    return this.props.type || "text";
  }

  render() {
    const classes = ["input"];
    (0, _modifier.bringAll)(classes, this.props);

    if (this.props.static) {
      classes.push("is-static");
    }

    return _react.default.createElement("input", {
      className: (0, _class.classString)(classes, this.props.className),
      name: this.props.name,
      type: this._getType(),
      placeholder: this.props.placeholder,
      value: this.getStateValue(),
      readOnly: this.getReadOnly(),
      disabled: this.props.disabled,
      ref: this.props.inputRef,
      onChange: ev => this.setStateValue(ev.target.value)
    });
  }

}

exports.default = Input;
Input.propTypes = {
  className: _props.classNamePropType,
  type: _propTypes.default.oneOf(["text", "password", "email", "tel", "number"]),
  placeholder: _propTypes.default.string,
  static: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  inputRef: _propTypes.default.func,
  ..._props.allModifiersPropList
};
//# sourceMappingURL=input.js.map
