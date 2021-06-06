import React from "react";
import PropTypes from "prop-types";

import {classString} from "../utils/class.js";
import {bringAll} from "../utils/modifier.js";
import {
  allModifiersPropList,
  classNamePropType,
} from "../utils/props.js";

/**
 * Props:
 * - className: applied to the hero outer body
 * - contentClassName: applied to the hero content
 * - color
 * - size
 * - gradient: true if a light gradient should be used
 * - fullheight: true if the hero is full height (override size)
 * - head: node that should stick to the top of the Hero
 * - foot: node that should stick to the bottom of the Hero
 * - All Bulma modifiers
 */
export default class Hero extends React.Component {
  render() {
    const classes = ["hero"];
    if (this.props.fullheight) {
      this.props.size = undefined;
      classes.push("is-fullheight");
    }
    if (this.props.gradient) {
      classes.push("is-bold");
    }
    bringAll(classes, this.props);
    const headElement = this.props.head
      ? <div className="hero-head">
        {this.props.head}
      </div>
      : undefined;
    const footElement = this.props.foot
      ? <div className="hero-foot">
        {this.props.foot}
      </div>
      : undefined;
    return <section className={classString(classes, this.props.className)}>
      {headElement}
      <div className={classString(["hero-body"], this.props.contentClassName)}>
        {this.props.children}
      </div>
      {footElement}
    </section>;
  }
}
Hero.propTypes = {
  className: classNamePropType,
  contentClassName: classNamePropType,
  gradient: PropTypes.bool,
  fullheight: PropTypes.bool,
  head: PropTypes.node,
  foot: PropTypes.node,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Hero.defaultProps = {
  className: undefined,
  contentClassName: undefined,
  gradient: false,
  fullheight: false,
  head: undefined,
  foot: undefined,
};
Hero.displayName = "Hero";
