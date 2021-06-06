import React from "react";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  render() {
    return <th
      rowSpan={this.props.rowSpan}
      colSpan={this.props.colSpan}
    >
      {this.props.children}
    </th>;
  }
}
Header.propTypes = {
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
  children: PropTypes.node.isRequired,
};
Header.defaultProps = {
  colSpan: undefined,
  rowSpan: undefined,
};
Header.displayName = "Header";
