import React from "react";
import PropTypes from "prop-types";

import ControlledInput from "./controlledinput";
import {classString} from "../utils/class";
import {bringAll} from "../utils/modifier";
import {classNamePropType} from "../utils/props";
import {allModifiersPropList} from "../utils/props";

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
  _handleChange(elem) {
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
      className={classString(classes, this.props.className)}>
      <select
        multiple={this.props.multiple}
        disabled={this.props.disabled}
        value={this.props.value}
        onChange={ev => this._handleChange(ev.target)}>
        {this.props.children}
      </select>
    </div>;
  }
}
Select.propTypes = {
  className: classNamePropType,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  ...allModifiersPropList,
};

/**
 * Props:
 * - className
 * - value
 * - All Bulma modifiers
 */
class Option extends React.Component {
  render() {
    const classes = [];
    return <option
      className={classString(classes, this.props.className)}
      value={this.props.value}
    >
      {this.props.children}
    </option>;
  }
}
Option.propTypes = {
  className: classNamePropType,
  value: PropTypes.string,
  children: PropTypes.node,
};
Select.Option = Option;
