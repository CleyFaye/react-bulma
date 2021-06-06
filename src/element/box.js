import React from "react";
import PropTypes from "prop-types";

import {bringAll} from "../utils/modifier.js";
import {
  allModifiersPropList,
  classNamePropType,
} from "../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - All Bulma modifiers
 */
export default class Box extends React.Component {
  render() {
    const classes = ["box"];
    bringAll(classes, this.props);
    return <div className={clsx(classes, this.props.className)}>
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
