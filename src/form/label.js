import React from "react";
import PropTypes from "prop-types";

import {bringAll} from "../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../utils/props.js";
import {renderChildrenWithProps} from "../utils/children.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 * - All bulma modifiers
 */
export default class Label extends React.Component {
  renderChildren() {
    return renderChildrenWithProps(
      this.props,
      {size: true},
    );
  }

  render() {
    const classes = ["label"];
    bringAll(classes, this.props);
    return <label className={clsx(classes, this.props.className)}>
      {this.props.children}
    </label>;
  }
}
Label.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Label.defaultProps = {className: undefined};
Label.displayName = "Label";
