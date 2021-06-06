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
export default class Left extends React.Component {
  render() {
    const classes = ["media-left"];
    bringAll(classes, this.props);
    return <figure className={classString(classes, this.props.className)}>
      {this.props.children}
    </figure>;
  }
}
Left.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Left.defaultProps = {className: undefined};
Left.displayName = "Left";
