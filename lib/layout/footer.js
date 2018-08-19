import React from "react";
import PropTypes from "prop-types";

import {commonModifiers} from "../utils";

/**
 * Props:
 * - className
 *
 * Supports children
 */
export class Footer extends React.Component {
  render() {
    const classes = ["footer"];
    commonModifiers(this.props, classes);
    return <footer className={classes}>
      {this.props.children}
    </footer>;
  }
}
Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
