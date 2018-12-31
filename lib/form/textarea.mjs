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
export default class Textarea extends ControlledInput {
  render() {
    const classes = ["textarea"];
    bringAll(classes, this.props);
    return <textarea
      rows={this.props.rows}
      placeholder={this.props.placeholder}
      onChange={ev => this.setStateValue(ev.target.value)}
      onKeyUp={ev => this.setStateValue(ev.target.value)}
      readOnly={this.getReadOnly()}
      className={classString(classes, this.props.className)}>
      {this.props.value}
    </textarea>;
  }
}
Textarea.propTypes = {
  className: classNamePropType,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  ...allModifiersPropList,
};
