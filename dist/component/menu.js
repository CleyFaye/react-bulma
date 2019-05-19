"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _component = _interopRequireDefault(require("../utils/component"));

var _props = require("../utils/props");

var _modifier = require("../utils/modifier");

var _class = require("../utils/class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
class Menu extends _component.default {
  constructor(props) {
    super(props);
    this.prepareState({
      visible: !props.initiallyHidden
    });
    this._onToggleMenu = this._onToggleMenu.bind(this);
    this._onCloseMenu = this._onCloseMenu.bind(this);
  }

  _onToggleMenu() {
    this.updateState(oldState => ({
      visible: !oldState.visible
    }));
  }

  _onCloseMenu() {
    this.updateState({
      visible: false
    });
  }

  _renderChilds(children) {
    return _react.default.Children.map(children, child => _react.default.cloneElement(child, {
      _toggleParentMenu: this._onToggleMenu,
      _closeParentMenu: this.props.autoClose ? this._onCloseMenu : undefined
    }));
  }

  render() {
    const classes = ["menu"];

    if (this.state.visible) {
      classes.push("is-visible");
    }

    return _react.default.createElement("aside", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this._renderChilds(this.props.children));
  }

}

exports.default = Menu;
Menu.propTypes = {
  className: _props.classNamePropType,
  initiallyHidden: _propTypes.default.bool,
  autoClose: _propTypes.default.bool,
  children: _propTypes.default.node
};
/** Display a toggle for the menu */

class Toggle extends _component.default {
  render() {
    return _react.default.createElement("a", {
      className: this.props.className,
      onClick: this.props._toggleParentMenu
    }, this.props.children);
  }

}

Toggle.propTypes = {
  _toggleParentMenu: _propTypes.default.func,
  _closeParentMenu: _propTypes.default.func,
  className: _props.classNamePropType,
  children: _propTypes.default.node,
  ..._props.allModifiersPropList
};
Menu.Toggle = Toggle;
/**
 * Props:
 * - className
 * - All Bulma modifiers
 */

class Label extends _component.default {
  render() {
    const classes = ["menu-label"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("p", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

Label.propTypes = {
  _closeParentMenu: _propTypes.default.func,
  className: _props.classNamePropType,
  children: _propTypes.default.node,
  ..._props.allModifiersPropList
};
Menu.Label = Label;
/** 
 * Props:
 * - submenu (internal)
 */

class List extends _component.default {
  _renderChilds(children) {
    return _react.default.Children.map(children, child => {
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

      return _react.default.createElement("li", null, _react.default.cloneElement(child, newProps));
    });
  }

  render() {
    const classes = [];

    if (!this.props.submenu) {
      classes.push("menu-list");
    }

    return _react.default.createElement("ul", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this._renderChilds(this.props.children));
  }

}

List.propTypes = {
  _closeParentMenu: _propTypes.default.func,
  className: _props.classNamePropType,
  submenu: _propTypes.default.bool,
  children: _propTypes.default.node
};
Menu.List = List;
/**
 * Props:
 * - className
 * - title
 * - active
 */

class Submenu extends _component.default {
  render() {
    const classes = [];

    if (this.props.active) {
      classes.push("is-active");
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("a", {
      className: (0, _class.classString)(classes)
    }, this.props.title), _react.default.createElement(List, {
      submenu: true
    }, this.props.children));
  }

}

Submenu.propTypes = {
  className: _props.classNamePropType,
  active: _propTypes.default.bool,
  title: _propTypes.default.string,
  children: _propTypes.default.node
};
//# sourceMappingURL=menu.js.map
