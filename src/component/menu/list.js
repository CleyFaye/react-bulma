import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - submenu (internal)
 */
export default class List extends React.Component {
  _renderChilds(children) {
    return React.Children.map(children, child => {
      const originalClick = child.props.onClick;
      const newProps = {};
      if (this.props._closeParentMenu) {
        newProps.onClick = ev => {
          this.props._closeParentMenu();
          if (originalClick) {
            originalClick(ev);
          }
        };
      }
      return <li>{React.cloneElement(child, newProps)}</li>;
    });
  }

  render() {
    const classes = [];
    if (!this.props.submenu) {
      classes.push("menu-list");
    }
    return <ul className={clsx(classes, this.props.className)}>
      {this._renderChilds(this.props.children)}
    </ul>;
  }
}
List.propTypes = {
  _closeParentMenu: PropTypes.func,
  className: classNamePropType,
  submenu: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
List.defaultProps = {
  _closeParentMenu: undefined,
  className: undefined,
  submenu: false,
};
List.displayName = "List";
