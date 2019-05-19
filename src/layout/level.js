import React from "react";
import PropTypes from "prop-types";

import {classString} from "../utils/class";
import {bringAll} from "../utils/modifier";
import {allModifiersPropList} from "../utils/props";
import {classNamePropType} from "../utils/props";

/**
 * Props:
 * - alwaysHorizontal: if true, remains horizontal mobile
 */
export default class Level extends React.Component {
  render() {
    const classes = ["level"];
    if (this.props.alwaysHorizontal) {
      classes.push("is-mobile");
    }
    return <nav className={classString(classes, this.props.className)}>
      {this.props.children}
    </nav>;
  }
}
Level.propTypes = {
  alwaysHorizontal: PropTypes.bool,
  className: classNamePropType,
  children: PropTypes.node,
};

/**
 * Props:
 * - className
 */
class Left extends React.Component {
  render() {
    const classes = ["level-left"];
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Left.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
};
Level.Left = Left;

/**
 * Props:
 * - className
 */
class Right extends React.Component {
  render() {
    const classes = ["level-right"];
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Right.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
};
Level.Right = Right;

/**
 * Props:
 * - className
 * - All bulma modifiers
 */
class Item extends React.Component {
  render() {
    const classes = ["level-item"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Item.propTypes = {
  className: classNamePropType,
  ...allModifiersPropList,
  children: PropTypes.node,
};
Level.Item = Item;