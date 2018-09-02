import React from "react";
import PropTypes from "prop-types";

import {
  classString,
  addBreakpoint,
} from "../utils/class";
import {
  bringAll,
} from "../utils/modifier";
import {
  breakpointPropType,
  classNamePropType,
  allModifiersPropList,
} from "../utils/props";

/**
 * Props:
 * - className
 * - fluid
 * - breakpoint: if specified the container will be fullwidth until the
 *   specified breakpoint (only work with fullhd and widescreen)
 * - All bulma modifiers
 */
export class Container extends React.Component {
  render() {
    const classes = ["container"];
    bringAll(classes, this.props);
    addBreakpoint(classes, this.props.breakpoint);
    if (this.props.fluid) {
      classes.push("is-fluid");
    }
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Container.propTypes = {
  fluid: PropTypes.bool,
  className: classNamePropType,
  breakpoint: breakpointPropType,
  ...allModifiersPropList,
  children: PropTypes.node,
};
