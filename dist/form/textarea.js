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
 * - rows
 * - placeholder
 * - readOnly*
 * - value*
 * - onChange
 * - stateName: Name of the property referenced in stateObj.state. If not
 * provided will default to name.
 * - name: HTML name property for the form
 * - stateObj: object with both state and setState to handle updates
 * - All bulma modifiers
 * 
 * See form.Input for stateObj behavior.
 */
class Textarea extends _controlledinput.default {
  render() {
    const classes = ["textarea"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("textarea", {
      rows: this.props.rows,
      placeholder: this.props.placeholder,
      onChange: ev => this.setStateValue(ev.target.value),
      onKeyUp: ev => this.setStateValue(ev.target.value),
      readOnly: this.getReadOnly(),
      className: (0, _class.classString)(classes, this.props.className)
    }, this.getStateValue());
  }

}

exports.default = Textarea;
Textarea.propTypes = {
  className: _props.classNamePropType,
  rows: _propTypes.default.number,
  placeholder: _propTypes.default.string,
  ..._props.allModifiersPropList
};
//# sourceMappingURL=textarea.js.map
