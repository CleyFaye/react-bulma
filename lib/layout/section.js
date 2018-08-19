import React from "react";
import PropTypes from "prop-types";

import {commonModifiers} from "../utils";

/**
 * Props:
 * - className
 *
 * Supports childrens
 */
export class Section extends React.Component {
  render() {
    const classes = ["section"];
    commonModifiers(this.props, classes);
    return <section className={classes}>
      {this.props.children}
    </section>;
  }
}
Section.propTypes = {
  children: PropTypes.node,
};
