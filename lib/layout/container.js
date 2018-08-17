import React from "react";
import PropTypes from "prop-types";

import {breakpointToClass} from "../utils";

/**
 * Props:
 * - fluid
 * - breakpoint: if specified the container will be fullwidth until the
 *   specified breakpoint
 *
 * Supports childrens
 */
export class Container extends React.Component {
  render() {
    const classes = ["container"];
    if (this.props.fluid) {
      classes.push("is-fluid");
    }
    if (this.props.breakpoint) {
      classes.push(breakpointToClass(this.props.breakpoint));
    }
    return <div className={classes}>
      {this.props.children}
    </div>;
  }
}
Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  breakpoint: PropTypes.string,
};
