import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import {classString} from "../../utils/class.js";
import List from "./list.js";

/**
 * Props:
 * - className
 * - title
 * - active
 */
export default class Submenu extends React.Component {
  render() {
    const classes = [];
    if (this.props.active) {
      classes.push("is-active");
    }
    return <>
      <a className={classString(classes, this.props.className)}>{this.props.title}</a>
      <List submenu>{this.props.children}</List>
    </>;
  }
}
Submenu.propTypes = {
  className: classNamePropType,
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
Submenu.defaultProps = {
  className: undefined,
  active: false,
};
Submenu.displayName = "Submenu";
