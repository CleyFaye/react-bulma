import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import clsx from "clsx";

export default class Row extends React.Component {
  render() {
    return <tr className={clsx([], this.props.className)}>
      {this.props.children}
    </tr>;
  }
}
Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: classNamePropType,
};
Row.defaultProps = {className: undefined};
Row.displayName = "Row";
