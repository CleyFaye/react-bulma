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
export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    controlledInputMixin(
      this,
      ev => ev.target.checked,
    );
  }

  render() {
    const classes = ["checkbox"];
    bringAll(classes, this.props);
    return <label
      className={clsx(classes, this.props.className)}
      disabled={this.props.disabled || this.isReadOnly()}
    >
      <input
        type="checkbox"
        checked={this.props.value}
        disabled={this.props.disabled || this.isReadOnly()}
        onChange={this.handleChange}
      />
      {this.props.children}
    </label>;
  }
}
Checkbox.propTypes = {
  className: classNamePropType,
  disabled: PropTypes.bool,
  ...allModifiersPropList,
};
Checkbox.defaultProps = {
  className: undefined,
  disabled: false,
};
Checkbox.displayName = "Checkbox";
