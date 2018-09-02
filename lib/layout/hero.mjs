import React from "react";
import PropTypes from "prop-types";

import {
  classString,
} from "../utils/class";
import {
  bringAll,
} from "../utils/modifier";
import {
  allModifiersPropsList,
} from "../utils/props";

/**
 * Props:
 * - color
 * - size
 * - gradient: true if a light gradient should be used
 * - fullheight: true if the hero is full height (override size)
 * - head: node that should stick to the top of the Hero
 * - foot: node that should stick to the bottom of the Hero
 * - All Bulma modifiers
 */
export class Hero extends React.Component {
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
    return <section className={classString(classes)}>
      {headElement}
      <div className="hero-body">
        {this.props.children}
      </div>
      {footElement}
    </section>;
  }
}
Hero.propTypes = {
  ...allModifiersPropsList,
  gradient: PropTypes.bool,
  fullheight: PropTypes.bool,
  children: PropTypes.node,
  head: PropTypes.node,
  foot: PropTypes.node,
};