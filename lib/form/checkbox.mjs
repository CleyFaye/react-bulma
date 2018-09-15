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
export default class Input extends ControlledInput {
  render() {
    const classes = ["checkbox"];
    bringAll(classes, this.props);
    return <label
      className={classString(classes, this.props.className)}
      disabled={this.props.disabled}>
      <input
        type="checkbox"
        checked={this.getStateValue()}
        disabled={this.props.disabled}
        onChange={ev => this.setStateValue(ev.target.checked)} />
      {this.props.children}
    </label>;
  }
}
Input.propTypes = {
  className: classNamePropType,
  disabled: PropTypes.bool,
  ...allModifiersPropList,
};