import React from "react";
import PropTypes from "prop-types";

import {classString} from "../utils/class.js";
import {bringAll} from "../utils/modifier.js";
import {
  allModifiersPropList,
  classNamePropType,
} from "../utils/props.js";

/**
 * Props:
 * - All Bulma modifiers
 */
export default class Box extends React.Component {
  render() {
    const classes = ["box"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Box.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Box.defaultProps = {className: undefined};
Box.displayName = "Box";
