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
 * - alwaysHorizontal: if true, remains horizontal mobile
 */
class Level extends _react.default.Component {
  render() {
    const classes = ["level"];

    if (this.props.alwaysHorizontal) {
      classes.push("is-mobile");
    }

    return _react.default.createElement("nav", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.default = Level;
Level.propTypes = {
  alwaysHorizontal: _propTypes.default.bool,
  className: _props.classNamePropType,
  children: _propTypes.default.node
};
/**
 * Props:
 * - className
 */

class Left extends _react.default.Component {
  render() {
    const classes = ["level-left"];
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

Left.propTypes = {
  className: _props.classNamePropType,
  children: _propTypes.default.node
};
Level.Left = Left;
/**
 * Props:
 * - className
 */

class Right extends _react.default.Component {
  render() {
    const classes = ["level-right"];
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

Right.propTypes = {
  className: _props.classNamePropType,
  children: _propTypes.default.node
};
Level.Right = Right;
/**
 * Props:
 * - className
 * - All bulma modifiers
 */

class Item extends _react.default.Component {
  render() {
    const classes = ["level-item"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

Item.propTypes = {
  className: _props.classNamePropType,
  ..._props.allModifiersPropList,
  children: _propTypes.default.node
};
Level.Item = Item;
//# sourceMappingURL=level.js.map
