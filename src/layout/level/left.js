import React from "react";
import PropTypes from "prop-types";

import {classString} from "../../utils/class.js";
import {classNamePropType} from "../../utils/props.js";

/**
 * Props:
 * - className
 */
export default class Left extends React.Component {
  render() {
    const classes = ["level-left"];
    return <div className={classString(classes, this.props.className)}>
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
