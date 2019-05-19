import React from "react";
import PropTypes from "prop-types";

import {classString} from "../utils/class";
import {bringAll} from "../utils/modifier";
import {bringModifiers} from "../utils/modifier";
import {classNamePropType} from "../utils/props";
import {allModifiersPropList} from "../utils/props";
import {renderChildrenWithProps} from "../utils/children";

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
    return <div key={position} className={classString(classes)}>
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
      this.props,
      {
        size: true,
      });
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
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
      {icons}
    </div>;
  }
}
Control.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  iconSize: allModifiersPropList.size,
  expanded: PropTypes.bool,
  stateObj: PropTypes.object,
  ...allModifiersPropList,
};