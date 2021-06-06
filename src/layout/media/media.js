import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 */
export default class Media extends React.Component {
  render() {
    const classes = ["media"];
    return <article className={clsx(classes, this.props.className)}>
      {this.props.children}
    </article>;
  }
}
Media.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
};
Media.defaultProps = {className: undefined};
Media.displayName = "Media";
