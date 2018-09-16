import React from "react";
import PropTypes from "prop-types";

import {
  classString,
} from "../utils/class";
import {
  bringAll,
} from "../utils/modifier";
import {
  classNamePropType,
  allModifiersPropList,
} from "../utils/props";

/**
 * Props:
 * - className
 */
export default class Media extends React.Component {
  render() {
    const classes = ["media"];
    return <article className={classString(classes, this.props.className)}>
      {this.props.children}
    </article>;
  }
}
Media.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
};

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
class Left extends React.Component {
  render() {
    const classes = ["media-left"];
    bringAll(classes, this.props);
    return <figure className={classString(classes, this.props.className)}>
      {this.props.children}
    </figure>;
  }
}
Left.propTypes = {
  className: classNamePropType,
  ...allModifiersPropList,
  children: PropTypes.node,
};
Media.Left = Left;

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
class Content extends React.Component {
  render() {
    const classes = ["media-content"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Content.propTypes = {
  className: classNamePropType,
  ...allModifiersPropList,
  children: PropTypes.node,
};
Media.Content = Content;

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export class Right extends React.Component {
  render() {
    const classes = ["media-right"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Right.propTypes = {
  className: classNamePropType,
  ...allModifiersPropList,
  children: PropTypes.node,
};
Media.Right = Right;