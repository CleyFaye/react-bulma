import React from "react";
import PropTypes from "prop-types";

import {
  classString,
} from "../utils/class";
import {
  bringAll,
} from "../utils/modifier";
import {
  allModifiersPropList,
  classNamePropType,
} from "../utils/props";

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
  children: PropTypes.node,
  ...allModifiersPropList,
};