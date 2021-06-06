import React from "react";
import PropTypes from "prop-types";

// TODO turn that into a mixin (or leverage @cley_faye/react-utils)

/** A base for all component that have their value controlled somewhere else.
 *
 * Props:
 * - stateName: default to name
 * - name
 * - stateObj
 * - onChange
 * - value
 * - readOnly
 *
 * Note:
 * The `value` property must be passed the "classic" way; this is used among
 * other thing to make sure the component refresh when the parent component
 * state refresh.
 */
export default class ControlledInput extends React.Component {
  _getStateName() {
    if (this.props.stateName) {
      return this.props.stateName;
    }
    return this.props.name;
  }

  setStateValue(value) {
    if (this.props.stateObj) {
      this.props.stateObj.setState({[this._getStateName()]: value});
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  getReadOnly() {
    if (this.props.stateObj) {
      return this.props.stateObj.state.readonly || this.props.readOnly
        || this.props.stateObj.state.loading;
    }
    return this.props.readOnly;
  }
}
ControlledInput.propTypes = {
  onChange: PropTypes.func,
  stateName: PropTypes.string,
  name: PropTypes.string,
  stateObj: PropTypes.object,
  // eslint-disable-next-line react/no-unused-prop-types
  value: PropTypes.any,
  readOnly: PropTypes.bool,
};
ControlledInput.defaultProps = {
  onChange: undefined,
  stateName: undefined,
  name: undefined,
  stateObj: undefined,
  value: undefined,
  readOnly: false,
};
ControlledInput.displayName = "ControlledInput";
