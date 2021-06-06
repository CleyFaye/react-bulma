import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import {classString} from "../../utils/class.js";

export default class Table extends React.Component {
  render() {
    const classes = ["table"];
    return <table className={classString(classes, this.props.className)}>
      {this.props.children}
    </table>;
  }
}
Table.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
};
Table.defaultProps = {className: undefined};
Table.displayName = "Table";
