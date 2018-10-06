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
 * - initiallyHidden
 * - autoClose(bool): close when an item is clicked
 * 
 * @example
 * @begincode
 * <Menu>
 *   <Menu.Toggle>X</Menu.Toggle>
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
 * 
 * @note
 * If a toggle is present, it will switch the "is-visible" property on the top
 * menu element.
 */
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.prepareState({
      visible: !props.initiallyHidden,
    });
    this._onToggleMenu = this._onToggleMenu.bind(this);
    this._onCloseMenu = this._onCloseMenu.bind(this);
  }

  _onToggleMenu() {
    this.updateState(oldState => ({
      visible: !oldState.visible,
    }));
  }

  _onCloseMenu() {
    this.updateState({
      visible: false,
    });
  }

  _renderChilds(children) {
    return React.Children.map(children, child => React.cloneElement(
      child,
      {
        _toggleParentMenu: this._onToggleMenu,
        _closeParentMenu: this.props.autoClose
          ? this._onCloseMenu
          : undefined,
      }
    ));
  }

  render() {
    const classes = ["menu"];
    if (this.state.visible) {
      classes.push("is-visible");
    }
    return <aside className={classString(classes, this.props.className)}>
      {this._renderChilds(this.props.children)}
    </aside>;
  }
}
Menu.propTypes = {
  className: classNamePropType,
  initiallyHidden: PropTypes.bool,
  autoClose: PropTypes.bool,
  children: PropTypes.node,
};

/** Display a toggle for the menu */
class Toggle extends Component {
  render() {
    return <a
      className={this.props.className}
      onClick={this.props._toggleParentMenu}>
      {this.props.children}
    </a>;
  }
}
Toggle.propTypes = {
  _toggleParentMenu: PropTypes.func,
  _closeParentMenu: PropTypes.func,
  className: classNamePropType,
  children: PropTypes.node,
  ...allModifiersPropList,
};
Menu.Toggle = Toggle;

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
  _closeParentMenu: PropTypes.func,
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
    return <ul className={classString(classes, this.props.className)}>
      {this._renderChilds(this.props.children)}
    </ul>;
  }
}
List.propTypes = {
  _closeParentMenu: PropTypes.func,
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