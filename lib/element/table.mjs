import React from "react";
import PropTypes from "prop-types";

import Component from "../utils/component";
import {classNamePropType} from "../utils/props";
import {classString} from "../utils/class";

export default class Table extends Component {
  render() {
    const classes = ["table"];
    return <table className={classString(classes, this.props.className)}>
      {this.props.children}
    </table>;
  }
}
Table.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
};

class Head extends Component {
  render() {
    return <thead>
      {this.props.children}
    </thead>;
  }
}
Head.propTypes = {
  children: PropTypes.node,
};
Table.Head = Head;

class Foot extends Component {
  render() {
    return <tfoot>
      {this.props.children}
    </tfoot>;
  }
}
Foot.propTypes = {
  children: PropTypes.node,
};

class Row extends Component {
  render() {
    return <tr>
      {this.props.children}
    </tr>;
  }
}
Row.propTypes = {
  children: PropTypes.node,
};
Table.Row = Row;

class Header extends Component {
  render() {
    return <th
      rowSpan={this.props.rowSpan}
      colSpan={this.props.colSpan}>
      {this.props.children}
    </th>;
  }
}
Header.propTypes = {
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
  children: PropTypes.node,
};
Table.Header = Header;

class Cell extends Component {
  render() {
    return <td
      rowSpan={this.props.rowSpan}
      colSpan={this.props.colSpan}>
      {this.props.children}
    </td>;
  }
}
Cell.propTypes = {
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
  children: PropTypes.node,
};
Table.Cell = Cell;
