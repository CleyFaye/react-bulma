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
 * - className
 * - All Bulma modifiers
 */
export default class Section extends React.Component {
  render() {
    const classes = ["section"];
    bringAll(classes, this.props);
    return <section className={classString(classes, this.props.className)}>
      {this.props.children}
    </section>;
  }
}
Section.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Section.defaultProps = {className: undefined};
Section.displayName = "Section";
