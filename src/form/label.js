import React from "react";
import PropTypes from "prop-types";

import {classString} from "../utils/class";
import {bringAll} from "../utils/modifier";
import {classNamePropType} from "../utils/props";
import {allModifiersPropList} from "../utils/props";
import {renderChildrenWithProps} from "../utils/children";

/**
 * Props:
 * - className
 * - All bulma modifiers
 */
export default class Label extends React.Component {
  renderChildren() {
    return renderChildrenWithProps(
      this.props,
      {
        size: true,
      });
  }

  render() {
    const classes = ["label"];
    bringAll(classes, this.props);
    return <label className={classString(classes, this.props.className)}>
      {this.props.children}
    </label>;
  }
}
Label.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
  ...allModifiersPropList,
};