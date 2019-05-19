"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarItem = exports.Navbar = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO Use Navbar.Item instead of NavbarItem

/**
 * Props:
 * - brandItems: elements always visible
 * - leftItems: elements on the left
 * - rightItems: elements on the right
 * - transparent
 *
 * All elements are expected to be NavbarItem
 */
class Navbar extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      burgerOpen: false
    }, this.state || {});
  }

  burgerClick() {
    this.setState({
      burgerOpen: !this.state.burgerOpen
    });
  }

  render() {
    let burgerClass = "navbar-burger";
    let menuClass = "navbar-menu";

    if (this.state.burgerOpen) {
      burgerClass += " is-active";
      menuClass += " is-active";
    }

    const navbarClass = this.props.transparent ? "navbar is-transparent" : "navbar";
    return _react.default.createElement("nav", {
      className: navbarClass,
      role: "navigation"
    }, _react.default.createElement("div", {
      className: "navbar-brand"
    }, this.props.brandItems, _react.default.createElement("a", {
      role: "button",
      className: burgerClass,
      onClick: () => this.burgerClick()
    }, _react.default.createElement("span", null), _react.default.createElement("span", null), _react.default.createElement("span", null))), _react.default.createElement("div", {
      className: menuClass
    }, _react.default.createElement("div", {
      className: "navbar-start"
    }, this.props.leftItems), _react.default.createElement("div", {
      className: "navbar-end"
    }, this.props.rightItems)));
  }

}

exports.Navbar = Navbar;
Navbar.propTypes = {
  brandItems: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  leftItems: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  rightItems: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  transparent: _propTypes.default.bool
};
/**
 * Props:
 * - url
 * - logoURL
 * - logoWidth
 * - logoHeight
 * - label
 * - dropdownItems
 *
 * Not all props are required at the same time.
 * In particular, it makes no sense to have both dropdownItems and url.
 */

class NavbarItem extends _react.default.Component {
  render() {
    const imageElem = this.props.logoURL ? _react.default.createElement("img", {
      src: this.props.logoURL,
      width: this.props.logoWidth,
      height: this.props.logoHeight
    }) : null;

    if (this.props.dropdownItems) {
      return _react.default.createElement("div", {
        className: "navbar-item has-dropdown"
      }, _react.default.createElement("a", {
        className: "navbar-link"
      }, this.props.label, imageElem, this.props.children), _react.default.createElement("div", {
        className: "navbar-dropdown"
      }, this.props.dropdownItems));
    }

    if (this.props.children) {
      return _react.default.createElement("div", {
        className: "navbar-item"
      }, this.props.label, imageElem, this.props.children);
    }

    return _react.default.createElement("a", {
      className: "navbar-item",
      href: this.props.url
    }, this.props.label, imageElem, this.props.children);
  }

}

exports.NavbarItem = NavbarItem;
NavbarItem.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  dropdownItems: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  url: _propTypes.default.string,
  logoURL: _propTypes.default.string,
  logoWidth: _propTypes.default.number,
  logoHeight: _propTypes.default.number,
  label: _propTypes.default.string
};
//# sourceMappingURL=navbar.js.map
