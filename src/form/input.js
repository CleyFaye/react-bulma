import React from "react";
import PropTypes from "prop-types";

import controlledInputMixin from "../utils/controlledinput.js";
import {bringAll} from "../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../utils/props.js";
import clsx from "clsx";

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
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    controlledInputMixin(
      this,
      ev => ev.target.value,
    );
  }

  render() {
    const classes = ["input"];
    bringAll(classes, this.props);
    if (this.props.static) {
      classes.push("is-static");
    }
    return <input
      className={clsx(classes, this.props.className)}
      name={this.props.name}
      type={this.props.type}
      placeholder={this.props.placeholder}
      autoComplete={this.props.autoComplete}
      value={this.props.value}
      readOnly={this.isReadOnly()}
      disabled={this.props.disabled}
      ref={this.props.inputRef}
      min={this.props.min}
      max={this.props.max}
      step={this.props.step}
      onChange={this.handleChange}
    />;
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
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  ...allModifiersPropList,
};
Input.defaultProps = {
  className: undefined,
  type: "text",
  placeholder: undefined,
  static: false,
  disabled: false,
  autoComplete: undefined,
  inputRef: undefined,
  min: undefined,
  max: undefined,
  step: undefined,
};
Input.displayName = "Input";
