import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 */
class Right extends React.Component {
  render() {
    const classes = ["level-right"];
    return <div className={clsx(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Right.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
};
Right.defaultProps = {className: undefined};
Right.displayName = "Right";
