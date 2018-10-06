import React from "react";
import PropTypes from "prop-types";

import Component from "../utils/component";
import {
  allModifiersPropList,
  classNamePropType,
} from "../utils/props";
import {
  bringAll,
} from "../utils/modifier";
import {
  classString,
} from "../utils/class";

/**
 * Props:
 * - className
 * 
 * @example
 * @begincode
 * <Menu>
 *   <Menu.Label>Title 1</Menu.Label>
 *   <Menu.List>
 *     <a>Elem 1</a>
 *     <a>Elem 2</a>
 *     <Menu.Submenu title="Submenu title">
 *       <a>Sub elem 1</a>
 *       <a>Sub elem 2</a>
 *     </Menu.Submenu>
 *   </Menu.List>
 * </Menu>
 * @endcode
 */
export default class Menu extends Component {
  render() {
    return <aside className={classString("menu", this.props.className)}>
      {this.props.children}
    </aside>;
  }
}
Menu.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
};

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
class Label extends Component {
  render() {
    const classes = ["menu-label"];
    bringAll(classes, this.props);
    return <p className={classString(classes, this.props.className)}>
      {this.props.children}
    </p>;
  }
}
Label.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
  ...allModifiersPropList,
};
Menu.Label = Label;

/** 
 * Props:
 * - submenu (internal)
 */
class List extends Component {
  _renderChilds(children) {
    return React.Children.map(children, child => <li>{child}</li>);
  }

  render() {
    const classes = [];
    if (!this.props.submenu) {
      classes.push("menu-list");
    }
    return <ul className={classString(classes, this.props.className)}>
      {this._renderChilds(this.props.children)}
    </ul>;
  }
}
List.propTypes = {
  className: classNamePropType,
  submenu: PropTypes.bool,
  children: PropTypes.node,
};
Menu.List = List;

/**
 * Props:
 * - className
 * - title
 * - active
 */
class Submenu extends Component {
  render() {
    const classes = [];
    if (this.props.active) {
      classes.push("is-active");
    }
    return <React.Fragment>
      <a className={classString(classes)}>{this.props.title}</a>
      <List submenu>{this.props.children}</List>
    </React.Fragment>;
  }
}
Submenu.propTypes = {
  className: classNamePropType,
  active: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
};