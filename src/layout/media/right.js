import React from "react";
import PropTypes from "prop-types";

import {bringAll} from "../../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Right extends React.Component {
  render() {
    const classes = ["media-right"];
    bringAll(classes, this.props);
    return <div className={clsx(classes, this.props.className)}>
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
