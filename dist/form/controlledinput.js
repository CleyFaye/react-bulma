"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** A base for all component that have their value controlled somewhere else.
 * 
 * Props:
 * - stateName: default to name
 * - name
 * - stateObj
 * - onChange
 * - value
 * - readOnly
 */
class ControlledInput extends _react.default.Component {
  _getStateName() {
    if (this.props.stateName) {
      return this.props.stateName;
    }

    return this.props.name;
  }

  getStateValue() {
    if (this.stateObj) {
      return this.stateObj[this._getStateName()];
    }

    return this.props.value;
  }

  setStateValue(value) {
    if (this.stateObj) {
      this.stateObj.setState({
        [this._getStateName()]: value
      });
    }

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  getReadOnly() {
    if (this.stateObj) {
      return this.stateObj.readonly || this.props.readOnly || this.stateObj.loading;
    }

    return this.props.readOnly;
  }

}

exports.default = ControlledInput;
ControlledInput.propTypes = {
  onChange: _propTypes.default.func,
  stateName: _propTypes.default.string,
  name: _propTypes.default.string,
  stateObj: _propTypes.default.object,
  value: _propTypes.default.any,
  readOnly: _propTypes.default.bool
};
//# sourceMappingURL=controlledinput.js.map
