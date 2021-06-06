import React from "react";
import PropTypes from "prop-types";

import {addBreakpoint} from "../utils/class.js";
import {bringAll} from "../utils/modifier.js";
import {
  breakpointPropType,
  classNamePropType,
  allModifiersPropList,
} from "../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 * - fluid
 * - breakpoint: if specified the container will be fullwidth until the
 *   specified breakpoint (only work with fullhd and widescreen)
 * - All bulma modifiers
 */
export default class Container extends React.Component {
  render() {
    const classes = ["container"];
    bringAll(classes, this.props);
    addBreakpoint(classes, this.props.breakpoint);
    if (this.props.fluid) {
      classes.push("is-fluid");
    }
    return <div className={clsx(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Container.propTypes = {
  className: classNamePropType,
  fluid: PropTypes.bool,
  breakpoint: breakpointPropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Container.defaultProps = {
  className: undefined,
  fluid: false,
  breakpoint: undefined,
};
Container.displayName = "Container";
