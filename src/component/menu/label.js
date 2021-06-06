import React from "react";
import PropTypes from "prop-types";

import {
  allModifiersPropList,
  classNamePropType,
} from "../../utils/props.js";
import {bringAll} from "../../utils/modifier.js";
import {classString} from "../../utils/class.js";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Label extends React.Component {
  render() {
    const classes = ["menu-label"];
    bringAll(classes, this.props);
    return <p className={classString(classes, this.props.className)}>
      {this.props.children}
    </p>;
  }
}
Label.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Label.defaultProps = {className: undefined};
Label.displayName = "Label";
