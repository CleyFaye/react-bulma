import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 * - initiallyHidden
 * - autoClose(bool): close when an item is clicked
 *
 * @example
 * @begincode
 * <Menu>
 *   <Toggle>X</Toggle>
 *   <Label>Title 1</Label>
 *   <List>
 *     <a>Elem 1</a>
 *     <a>Elem 2</a>
 *     <Submenu title="Submenu title">
 *       <a>Sub elem 1</a>
 *       <a>Sub elem 2</a>
 *     </Submenu>
 *   </List>
 * </Menu>
 * @endcode
 *
 * @note
 * If a toggle is present, it will switch the "is-visible" property on the top
 * menu element.
 */
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: !props.initiallyHidden};
    this._onToggleMenu = this._onToggleMenu.bind(this);
    this._onCloseMenu = this._onCloseMenu.bind(this);
  }

  _onToggleMenu() {
    this.setState(oldState => ({visible: !oldState.visible}));
  }

  _onCloseMenu() {
    this.setState({visible: false});
  }

  _renderChilds(children) {
    return React.Children.map(children, child => React.cloneElement(
      child,
      {
        _toggleParentMenu: this._onToggleMenu,
        _closeParentMenu: this.props.autoClose
          ? this._onCloseMenu
          : undefined,
      },
    ));
  }

  render() {
    const classes = ["menu"];
    if (this.state.visible) {
      classes.push("is-visible");
    }
    return <aside className={clsx(classes, this.props.className)}>
      {this._renderChilds(this.props.children)}
    </aside>;
  }
}
Menu.propTypes = {
  className: classNamePropType,
  initiallyHidden: PropTypes.bool,
  autoClose: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
Menu.defaultProps = {
  className: undefined,
  initiallyHidden: false,
  autoClose: false,
};
Menu.displayName = "Menu";
