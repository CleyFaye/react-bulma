import React from "react";
import PropTypes from "prop-types";

import {bringAll} from "../../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";
import {renderChildrenWithProps} from "../../utils/children.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Label extends React.Component {
  _renderChildren() {
    return renderChildrenWithProps(
      this.props.children,
      {size: this.props.size},
    );
  }

  render() {
    const classes = ["field-label"];
    bringAll(classes, this.props);
    return <div className={clsx(classes, this.props.className)}>
      {this._renderChildren()}
    </div>;
  }
}
Label.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Label.defaultProps = {className: undefined};
Label.displayName = "Label";
