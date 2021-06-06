import React from "react";
import PropTypes from "prop-types";

import {bringAll} from "../../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Content extends React.Component {
  render() {
    const classes = ["media-content"];
    bringAll(classes, this.props);
    return <div className={clsx(classes, this.props.className)}>
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
