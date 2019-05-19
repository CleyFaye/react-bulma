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
 * - stateName: Name of the property referenced in stateObj.state. If not
 * provided will default to name.
 * - name: HTML name property for the form
 * - stateObj: object with both state and setState to handle updates
 * - disabled
 * - value*: updated using stateObj.state[propName]
 * - onChange: handle change on the input
 * - All Bulma modifiers
 *
 * See form.Input for details on stateObj
 */
class Input extends _controlledinput.default {
  render() {
    const classes = ["checkbox"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("label", {
      className: (0, _class.classString)(classes, this.props.className),
      disabled: this.props.disabled
    }, _react.default.createElement("input", {
      type: "checkbox",
      checked: this.getStateValue(),
      disabled: this.props.disabled,
      onChange: ev => this.setStateValue(ev.target.checked)
    }), this.props.children);
  }

}

exports.default = Input;
Input.propTypes = {
  className: _props.classNamePropType,
  disabled: _propTypes.default.bool,
  ..._props.allModifiersPropList
};
//# sourceMappingURL=checkbox.js.map
