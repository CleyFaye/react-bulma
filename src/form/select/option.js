import React from "react";
import PropTypes from "prop-types";

import {classString} from "../../utils/class.js";
import {classNamePropType} from "../../utils/props.js";

/**
 * Props:
 * - className
 * - value
 * - All Bulma modifiers
 */
export default class Option extends React.Component {
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
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
Option.defaultProps = {className: undefined};
Option.displayName = "Option";
