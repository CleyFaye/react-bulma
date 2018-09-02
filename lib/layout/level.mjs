import React from "react";
import PropTypes from "prop-types";

import {
  classString,
} from "../utils/class";
import {
  bringAll,
} from "../utils/modifier";
import {
  allModifiersPropList,
  classNamePropType,
} from "../utils/props";

/**
 * Props:
 * - alwaysHorizontal: if true, remains horizontal mobile
 */
export class Level extends React.Component {
  render() {
    const classes = ["level"];
    if (this.props.alwaysHorizontal) {
      classes.push("is-mobile");
    }
    return <nav className={classString(classes, this.props)}>
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
export class Left extends React.Component {
  render() {
    const classes = ["level-left"];
    return <div className={classString(classes, this.props)}>
      {this.props.children}
    </div>;
  }
}
Left.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
};

/**
 * Props:
 * - className
 */
class Right extends React.Component {
  render() {
    const classes = ["level-right"];
    return <div className={classString(classes, this.props)}>
      {this.props.children}
    </div>;
  }
}
Right.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
};

/**
 * Props:
 * - className
 * - All bulma modifiers
 */
class Item extends React.Component {
  render() {
    const classes = ["level-item"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props)}>
      {this.props.children}
    </div>;
  }
}
Item.propTypes = {
  className: classNamePropType,
  ...allModifiersPropList,
  children: PropTypes.node,
};