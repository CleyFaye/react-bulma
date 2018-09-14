import React from "react";
import PropTypes from "prop-types";

import {
  bringAll,
} from "../utils/modifier";
import {
  classNameProptype,
  allModifiersPropsList,
} from "../utils/props";
import {
  classString,
} from "../utils/class";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Footer extends React.Component {
  render() {
    const classes = ["footer"];
    bringAll(classes, this.props);
    return <footer className={classString(classes, this.props.className)}>
      {this.props.children}
    </footer>;
  }
}
Footer.propTypes = {
  className: classNameProptype,
  ...allModifiersPropsList,
  children: PropTypes.node,
};