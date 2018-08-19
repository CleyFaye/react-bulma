import React from "react";
import PropTypes from "prop-types";

import {commonModifiers} from "../utils";

/**
 * Props:
 * - color
 * - size
 * - gradient: true if a light gradient should be used
 * - fullheight: true if the hero is full height (override size)
 * - head: nodes that should stick to the top of the Hero
 * - foot: nodes that should stick to the bottom of the Hero
 *
 * Supports children
 */
export class Hero extends React.Component {
  render() {
    const classes = ["hero"];
    if (this.props.fullheight) {
      this.props.size = undefined;
      classes.push("is-fullheight");
    }
    commonModifiers(this.props, classes);
    if (this.props.gradient) {
      classes.push("is-bold");
    }
    let headElement = this.props.head
      ? <div className="hero-head">
        {this.props.head}
      </div>
      : undefined;
    let footElement = this.props.foot
      ? <div className="hero-foot">
        {this.props.foot}
      </div>
      : undefined;
    return <section className={classes}>
      {headElement}
      <div className="hero-body">
        {this.props.children}
      </div>
      {footElement}
    </section>;
  }
}
Hero.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  gradient: PropTypes.bool,
  fullheight: PropTypes.bool,
  children: PropTypes.node,
  head: PropTypes.node,
  foot: PropTypes.node,
};
