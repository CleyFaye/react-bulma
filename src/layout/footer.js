import React from "react";
import PropTypes from "prop-types";

import {bringAll} from "../utils/modifier.js";
import {
  classNameProptype,
  allModifiersPropList,
} from "../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Footer extends React.Component {
  render() {
    const classes = ["footer"];
    bringAll(classes, this.props);
    return <footer className={clsx(classes, this.props.className)}>
      {this.props.children}
    </footer>;
  }
}
Footer.propTypes = {
  className: classNameProptype,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Footer.defaultProps = {className: undefined};
Footer.displayName = "Footer";
