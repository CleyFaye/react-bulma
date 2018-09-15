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
  _handleChange(htmlOptions) {
    const values = Array.from(htmlOptions).map(opt => opt.value);
    this.setStateValue(values);
  }

  _renderChildren() {
    return React.Children.map(this.props.children, child => React.cloneElement(
      child,
      {
        activeValues: this.getStateValue(),
      }
    ));
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
        onChange={ev => this._handleChange(ev.target.selectedOptions)}>
        {this._renderChildren()}
      </select>
    </div>;
  }
}
Select.propTypes = {
  className: classNamePropType,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
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
    const isSelected = this.props.activeValues.include(this.props.value);
    const classes = [];
    return <option
      className={classString(classes, this.props.className)}
      value={this.props.value}
      selected={isSelected}>
      {this.props.children}
    </option>;
  }
}
Option.propTypes = {
  className: classNamePropType,
  value: PropTypes.string,
  activeValues: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};
Select.Option = Option;