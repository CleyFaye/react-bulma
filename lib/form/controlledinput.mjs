import React from "react";
import PropTypes from "prop-types";

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
export default class ControlledInput extends React.Component {
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
      this.stateObj.setState({[this._getStateName()]: value});
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  getReadOnly() {
    if (this.stateObj) {
      return this.stateObj.readonly || this.props.readOnly
        || this.stateObj.loading;
    }
    return this.props.readOnly;
  }
}
ControlledInput.propTypes = {
  onChange: PropTypes.func,
  stateName: PropTypes.string,
  name: PropTypes.string,
  stateObj: PropTypes.object,
  value: PropTypes.any,
  readOnly: PropTypes.bool,
};