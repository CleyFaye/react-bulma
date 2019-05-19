"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class = require("../utils/class");

var _modifier = require("../utils/modifier");

var _props = require("../utils/props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Props:
 * - className: applied to the hero outer body
 * - contentClassName: applied to the hero content
 * - color
 * - size
 * - gradient: true if a light gradient should be used
 * - fullheight: true if the hero is full height (override size)
 * - head: node that should stick to the top of the Hero
 * - foot: node that should stick to the bottom of the Hero
 * - All Bulma modifiers
 */
class Hero extends _react.default.Component {
  render() {
    const classes = ["hero"];

    if (this.props.fullheight) {
      this.props.size = undefined;
      classes.push("is-fullheight");
    }

    if (this.props.gradient) {
      classes.push("is-bold");
    }

    (0, _modifier.bringAll)(classes, this.props);
    let headElement = this.props.head ? _react.default.createElement("div", {
      className: "hero-head"
    }, this.props.head) : undefined;
    let footElement = this.props.foot ? _react.default.createElement("div", {
      className: "hero-foot"
    }, this.props.foot) : undefined;
    return _react.default.createElement("section", {
      className: (0, _class.classString)(classes, this.props.className)
    }, headElement, _react.default.createElement("div", {
      className: (0, _class.classString)(["hero-body"], this.props.contentClassName)
    }, this.props.children), footElement);
  }

}

exports.default = Hero;
Hero.propTypes = {
  className: _props.classNamePropType,
  contentClassName: _props.classNamePropType,
  ..._props.allModifiersPropList,
  gradient: _propTypes.default.bool,
  fullheight: _propTypes.default.bool,
  children: _propTypes.default.node,
  head: _propTypes.default.node,
  foot: _propTypes.default.node
};
//# sourceMappingURL=hero.js.map
