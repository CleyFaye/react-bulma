import React from "react";
import PropTypes from "prop-types";

import {classString} from "../../utils/class.js";
import {bringAll} from "../../utils/modifier.js";
import {
  allModifiersPropList,
  classNamePropType,
} from "../../utils/props.js";

/**
 * Props:
 * - className
 * - All bulma modifiers
 */
export default class Item extends React.Component {
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
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Item.defaultProps = {className: undefined};
Item.displayName = "Item";
