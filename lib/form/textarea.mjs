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
 * - rows
 * - placeholder
 * - readonly*
 * - value*
 * - stateName: Name of the property referenced in stateObj.state. If not
 * provided will default to name.
 * - name: HTML name property for the form
 * - stateObj: object with both state and setState to handle updates
 * - All bulma modifiers
 * 
 * See form.Input for stateObj behavior.
 */
export default class Textarea extends React.Component {
  _getStateName() {
    if (this.props.stateName) {
      return this.props.stateName;
    }
    return this.props.name;
  }

  _getStateValue() {
    if (this.stateObj) {
      return this.stateObj[this._getStateName()];
    }
    return this.props.value;
  }

  _setStateValue(value) {
    if (this.stateObj) {
      this.stateObj.setState({[this._getStateName()]: value});
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    const classes = ["textarea"];
    bringAll(classes, this.props);
    return <textarea
      rows={this.props.rows}
      placeholder={this.props.placeholder}
      onChange={ev => this._setStateValue(ev.target.value)}
      className={classString(classes, this.props.className)}>
      {this._getStateValue()}
    </textarea>;
  }
}
Textarea.propTypes = {
  className: classNamePropType,
  ...allModifiersPropList,
};