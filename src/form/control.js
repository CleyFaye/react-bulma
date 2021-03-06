import React from "react";
import PropTypes from "prop-types";

import {
  bringAll,
  bringModifiers,
} from "../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../utils/props.js";
import {renderChildrenWithProps} from "../utils/children.js";
import clsx from "clsx";

/**
 * For holding input, select, button.
 *
 * Props:
 * - className
 * - iconLeft
 * - iconRight
 * - iconSize
 * - expanded(bool)
 * - stateObj: used to override loading if stateObj.state.loading is true.
 * - All bulma modifiers
 */
export default class Control extends React.Component {
  /** Prepare one icon.
   *
   * @param {Node} iconProp
   * @param {string} position
   *
   * @returns {Object}
   * The prepared icon (or undefined if no icon provided)
   */
  _prepareIcon(iconProp, position) {
    if (!iconProp) {
      return;
    }
    const classes = ["icon"];
    bringModifiers(classes, this.props, {size: "iconSize"});
    classes.push(`is-${position}`);
    return <div key={position} className={clsx(classes)}>
      {iconProp}
    </div>;
  }

  /** Prepare the icons.
   *
   * @param {Array.<{string}>} controlClasses
   *
   * @return {Array.<{object}>}
   * Array of elements to display.
   */
  _prepareIcons(controlClasses) {
    const result = [];
    if (this.props.iconLeft) {
      controlClasses.push("has-icons-left");
      result.push(this._prepareIcon(this.props.iconLeft, "left"));
    }
    if (this.props.iconRight) {
      controlClasses.push("has-icons-right");
      result.push(this._prepareIcon(this.props.iconRight, "right"));
    }
    return result;
  }

  _renderChildren() {
    return renderChildrenWithProps(
      this.props.children,
      {size: this.props.size},
    );
  }

  render() {
    const classes = ["control"];
    bringAll(classes, this.props);
    if (this.props.expanded) {
      classes.push("is-expanded");
    }
    if (this.props.stateObj && this.props.stateObj.state.loading) {
      classes.push("is-loading");
    }
    const icons = this._prepareIcons(classes);
    return <div className={clsx(classes, this.props.className)}>
      {this.props.children}
      {icons}
    </div>;
  }
}
Control.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  // eslint-disable-next-line react/no-unused-prop-types
  iconSize: allModifiersPropList.size,
  expanded: PropTypes.bool,
  stateObj: PropTypes.object,
  ...allModifiersPropList,
};
Control.defaultProps = {
  className: undefined,
  iconLeft: undefined,
  iconRight: undefined,
  iconSize: undefined,
  expanded: false,
  stateObj: undefined,
};
Control.displayName = "Control";
