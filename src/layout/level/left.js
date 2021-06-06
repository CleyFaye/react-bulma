import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 */
export default class Left extends React.Component {
  render() {
    const classes = ["level-left"];
    return <div className={clsx(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Left.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
};
Left.defaultProps = {className: undefined};
Left.displayName = "Left";
