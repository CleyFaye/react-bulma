import React from "react";
import PropTypes from "prop-types";

import {classString} from "../../utils/class.js";
import {classNamePropType} from "../../utils/props.js";

/**
 * Props:
 * - className
 */
class Right extends React.Component {
  render() {
    const classes = ["level-right"];
    return <div className={classString(classes, this.props.className)}>
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
