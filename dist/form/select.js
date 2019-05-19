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
 * - readOnly*
 * - value*
 * - onChange
 * - disabled
 * - stateName: Name of the property referenced in stateObj.state. If not
 * provided will default to name.
 * - name: HTML name property for the form
 * - stateObj: object with both state and setState to handle updates
 * - multiple
 * - All bulma modifiers
 * 
 * See form.Input for stateObj behavior.
 * 
 * @note
 * Use Select.Option for options
 */
class Select extends _controlledinput.default {
  _handleChange(htmlOptions) {
    const values = Array.from(htmlOptions).map(opt => opt.value);
    this.setStateValue(values);
  }

  _renderChildren() {
    return _react.default.Children.map(this.props.children, child => _react.default.cloneElement(child, {
      activeValues: this.getStateValue()
    }));
  }

  render() {
    const classes = ["select"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("div", {
      readOnly: this.getReadOnly(),
      className: (0, _class.classString)(classes, this.props.className)
    }, _react.default.createElement("select", {
      multiple: this.props.multiple,
      disabled: this.props.disabled,
      onChange: ev => this._handleChange(ev.target.selectedOptions)
    }, this._renderChildren()));
  }

}

exports.default = Select;
Select.propTypes = {
  className: _props.classNamePropType,
  multiple: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  ..._props.allModifiersPropList
};
/**
 * Props:
 * - className
 * - value
 * - All Bulma modifiers
 */

class Option extends _react.default.Component {
  render() {
    const isSelected = this.props.activeValues.include(this.props.value);
    const classes = [];
    return _react.default.createElement("option", {
      className: (0, _class.classString)(classes, this.props.className),
      value: this.props.value,
      selected: isSelected
    }, this.props.children);
  }

}

Option.propTypes = {
  className: _props.classNamePropType,
  value: _propTypes.default.string,
  activeValues: _propTypes.default.arrayOf(_propTypes.default.string),
  children: _propTypes.default.node
};
Select.Option = Option;
//# sourceMappingURL=select.js.map
