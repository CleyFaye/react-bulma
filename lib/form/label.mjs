import React from "react";
import PropTypes from "prop-types";

import {
  classString,
} from "../utils/class";
import {
  bringAll,
} from "../utils/modifier";
import {
  classNamePropType,
  allModifiersPropList,
} from "../utils/props";

/**
 * Props:
 * - className
 * - All bulma modifiers
 */
export default class Label extends React.Component {
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