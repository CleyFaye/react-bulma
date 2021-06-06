import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - alwaysHorizontal: if true, remains horizontal mobile
 */
export default class Level extends React.Component {
  render() {
    const classes = ["level"];
    if (this.props.alwaysHorizontal) {
      classes.push("is-mobile");
    }
    return <nav className={clsx(classes, this.props.className)}>
      {this.props.children}
    </nav>;
  }
}
Level.propTypes = {
  className: classNamePropType,
  alwaysHorizontal: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
Level.defaultProps = {
  className: undefined,
  alwaysHorizontal: false,
};
Level.displayName = "Level";
