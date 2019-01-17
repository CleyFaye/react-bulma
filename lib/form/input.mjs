import React from "react";
import PropTypes from "prop-types";

import ControlledInput from "./controlledinput";
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
 * - type("text", "password", "email", "tel", "number") :default to "text"
 * - placeholder
 * - stateName: Name of the property referenced in stateObj.state. If not
 * provided will default to name.
 * - name: HTML name property for the form
 * - stateObj: object with both state and setState to handle updates
 * - static
 * - disabled
 * - autoComplete
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
export default class Input extends ControlledInput {
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
      name={this.props.name}
      type={this._getType()}
      placeholder={this.props.placeholder}
      autoComplete={this.props.autoComplete}
      value={this.props.value}
      readOnly={this.getReadOnly()}
      disabled={this.props.disabled}
      ref={this.props.inputRef}
      onChange={ev => this.setStateValue(ev.target.value)} />;
  }
}
Input.propTypes = {
  className: classNamePropType,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "tel",
    "number",
  ]),
  placeholder: PropTypes.string,
  static: PropTypes.bool,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  inputRef: PropTypes.object,
  ...allModifiersPropList,
};
