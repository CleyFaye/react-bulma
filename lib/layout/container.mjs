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
  allModifiersPropList,
} from "../utils/props";

/**
 * Props:
 * - fluid
 * - breakpoint: if specified the container will be fullwidth until the
 *   specified breakpoint (only work with fullhd and widescreen)
 */
export class Container extends React.Component {
  render() {
    const classes = ["container"];
    bringAll(classes, this.props);
    addBreakpoint(classes, this.props.breakpoint);
    if (this.props.fluid) {
      classes.push("is-fluid");
    }
    return <div className={classString(classes)}>
      {this.props.children}
    </div>;
  }
}
Container.propTypes = {
  fluid: PropTypes.bool,
  breakpoint: breakpointPropType,
  ...allModifiersPropList,
  children: PropTypes.node,
};
