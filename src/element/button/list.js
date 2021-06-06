import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - joined: attach buttons together
 * - align: either "left", "center" or "right"
 */
export default class List extends React.Component {
  render() {
    const classes = ["buttons"];
    if (this.props.joined) {
      classes.push("has-addons");
    }
    if (this.props.align === "center") {
      classes.push("is-centered");
    } else if (this.props.align === "right") {
      classes.push("is-right");
    }
    return <div className={clsx(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
List.propTypes = {
  className: classNamePropType,
  joined: PropTypes.bool,
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
};
List.defaultProps = {
  className: undefined,
  joined: false,
  align: undefined,
};
List.displayName = "List";
