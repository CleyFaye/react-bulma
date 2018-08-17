import React from "react";
import PropTypes from "prop-types";

import {addCustomClasses} from "../utils";

/**
 * Props:
 * - alwaysHorizontal: if true, remains horizontal even on mobile
 *
 * Supports childrens
 */
export class Level extends React.Component {
  render() {
    const classes = ["level"];
    if (this.props.alwaysHorizontal) {
      classes.push("is-mobile");
    }
    return <nav className={classes}>
      {this.props.children}
    </nav>;
  }
}
Level.propTypes = {
  alwaysHorizontal: PropTypes.bool,
  children: PropTypes.node,
};

/**
 * Supports childrens
 */
class LevelLeft extends React.Component {
  render() {
    return <div className="level-left">
      {this.props.children}
    </div>;
  }
}
LevelLeft.propTypes = {
  children: PropTypes.node,
};
Level.Left = LevelLeft;

/**
 * Supports childrens
 */
class LevelRight extends React.Component {
  render() {
    return <div className="level-right">
      {this.props.children}
    </div>;
  }
}
LevelRight.propTypes = {
  children: PropTypes.node,
};
Level.Right = LevelRight;

/**
 * className: extra classes
 *
 * Supports childrens
 */
class LevelItem extends React.Component {
  render() {
    const classes = ["level-item"];
    if (this.props.className) {
      addCustomClasses(classes, this.props.className);
    }
    return <div className={classes}>
      {this.props.children}
    </div>;
  }
}
LevelItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  children: PropTypes.node,
};
Level.Item = LevelItem;
