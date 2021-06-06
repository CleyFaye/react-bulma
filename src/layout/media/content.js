import React from "react";
import PropTypes from "prop-types";

import {classString} from "../../utils/class.js";
import {bringAll} from "../../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Content extends React.Component {
  render() {
    const classes = ["media-content"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Content.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Content.defaultProps = {className: undefined};
Content.displayName = "Content";
