import React from "react";
import PropTypes from "prop-types";

export default class Cell extends React.Component {
  render() {
    return <td
      rowSpan={this.props.rowSpan}
      colSpan={this.props.colSpan}
    >
      {this.props.children}
    </td>;
  }
}
Cell.propTypes = {
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
  children: PropTypes.node.isRequired,
};
Cell.defaultProps = {
  colSpan: undefined,
  rowSpan: undefined,
};
Cell.displayName = "Cell";
