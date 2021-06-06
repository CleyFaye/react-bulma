import React from "react";
import PropTypes from "prop-types";

import {classString} from "../../utils/class.js";
import {bringAll} from "../../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";
import {renderChildrenWithProps} from "../../utils/children.js";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Label extends React.Component {
  _renderChildren() {
    return renderChildrenWithProps(
      this.props,
      {size: true},
    );
  }

  render() {
    const classes = ["field-label"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      {this._renderChildren()}
    </div>;
  }
}
Label.propTypes = {
  className: classNamePropType,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Label.defaultProps = {className: undefined};
Label.displayName = "Label";
