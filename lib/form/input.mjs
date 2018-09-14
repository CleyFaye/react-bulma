import React from "react";
import PropTypes from "prop-types";

import {
  classString,
} from "../utils/class";
import {
  bringAll,
} from "../utils/modifier";
import {
  classNamePropType,
  allModifiersPropList,
} from "../utils/props";

/**
 * Props:
 * - className
 * - type("text", "password", "email", "tel") :default to "text"
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
export class Input extends React.Component {
  _getStateName() {
    if (this.props.stateName) {
      return this.props.stateName;
    }
    return this.props.name;
  }

  _getStateValue() {
    if (this.stateObj) {
      return this.stateObj[this.getStateName()];
    }
    return this.props.value;
  }

  _getReadOnly() {
    if (this.stateObj) {
      return this.stateObj.readonly || this.props.readonly
        || this.stateObj.loading;
    }
    return this.props.readonly;
  }

  _setStateValue(value) {
    if (this.stateObj) {
      this.stateObj.setState({[this.getStateName()]: value});
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  _getType() {
    return this.props.type || "text";
  }

  render() {
    const classes = ["input"];
    bringAll(classes, this.props);
    if (this.props.static) {
      classes.push("is-static");
    }
    return <input 
      className={classString(classes, this.props.className)}
      type={this._getType()}
      placeholder={this.props.placeholder}
      value={this._getStateValue()}
      readOnly={this._getReadOnly()}
      disabled={this.props.disabled}
      ref={this.props.inputRef}
      onChange={ev => this._setStateValue(ev.target.value)} />;
  }
}
Input.propTypes = {
  className: classNamePropType,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "tel",
  ]),
  placeholder: PropTypes.string,
  stateName: PropTypes.string,
  name: PropTypes.string,
  stateObj: PropTypes.object,
  static: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  readonly: PropTypes.bool,
  inputRef: PropTypes.func,
  onChange: PropTypes.func,
  ...allModifiersPropList,
};
