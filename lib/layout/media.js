import React from "react";
import PropTypes from "prop-types";

import {commonModifiers} from "../utils";

/**
 * Props:
 * - className
 *
 * Supports children
 */
export class Media extends React.Component {
  render() {
    const classes = ["media"];
    commonModifiers(this.props, classes);
    return <article className={classes}>
      {this.props.children}
    </article>;
  }
}
Media.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Props:
 * - className
 *
 * Supports children
 */
class Left extends React.Component {
  render() {
    const classes = ["media-left"];
    commonModifiers(this.props, classes);
    return <figure className={classes}>
      {this.props.children}
    </figure>;
  }
}
Left.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Media.Left = Left;

/**
 * Props:
 * - className
 *
 * Supports children
 */
class Middle extends React.Component {
  render() {
    const classes = ["media-content"];
    commonModifiers(this.props, classes);
    return <div className={classes}>
      {this.props.children}
    </div>;
  }
}
Middle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Media.Middle = Middle;

/**
 * Props:
 * - className
 *
 * Supports children
 */
class Right extends React.Component {
  render() {
    const classes = ["media-right"];
    commonModifiers(this.props, classes);
    return <div className={classes}>
      {this.props.children}
    </div>;
  }
}
Right.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Media.Right = Right;
