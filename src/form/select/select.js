import React from "react";
import PropTypes from "prop-types";

import ControlledInput from "../controlledinput.js";
import {bringAll} from "../../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";
import clsx from "clsx";

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
export default class Select extends ControlledInput {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const elem = ev.target;
    if (this.props.multiple) {
      const values = Array.from(elem.selectedOptions).map(opt => opt.value);
      this.setStateValue(values);
    } else {
      this.setStateValue(elem.value);
    }
  }

  render() {
    const classes = ["select"];
    bringAll(classes, this.props);
    return <div
      readOnly={this.getReadOnly()}
      className={clsx(classes, this.props.className)}
    >
      <select
        multiple={this.props.multiple}
        disabled={this.props.disabled}
        value={this.props.value}
        onChange={this.handleChange}
      >
        {this.props.children}
      </select>
    </div>;
  }
}
Select.propTypes = {
  className: classNamePropType,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Select.defaultProps = {
  className: undefined,
  multiple: false,
  disabled: false,
};
Select.displayName = "Select";
