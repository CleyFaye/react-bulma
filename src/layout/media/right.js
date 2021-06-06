import React from "react";
import PropTypes from "prop-types";

import {classString} from "../../utils/class.js";
import {bringAll} from "../../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Right extends React.Component {
  render() {
    const classes = ["media-right"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Right.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Right.defaultProps = {className: undefined};
Right.displayName = "Right";
