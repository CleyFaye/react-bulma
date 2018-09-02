import React from "react";
import PropTypes from "prop-types";

import {
  classString,
} from "../utils/class";
import {
  bringAll,
} from "../utils/modifier";
import {
  allModifiersPropsList,
  classNamePropType,
} from "../utils/props";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export class Section extends React.Component {
  render() {
    const classes = ["section"];
    bringAll(classes, this.props);
    return <section className={classString(classes, this.props.className)}>
      {this.props.children}
    </section>;
  }
}
Section.propTypes = {
  ...allModifiersPropsList,
  className: classNamePropType,
  children: PropTypes.node,
};
