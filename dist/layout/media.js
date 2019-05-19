"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Right = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class = require("../utils/class");

var _modifier = require("../utils/modifier");

var _props = require("../utils/props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Props:
 * - className
 */
class Media extends _react.default.Component {
  render() {
    const classes = ["media"];
    return _react.default.createElement("article", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.default = Media;
Media.propTypes = {
  className: _props.classNamePropType,
  children: _propTypes.default.node
};
/**
 * Props:
 * - className
 * - All Bulma modifiers
 */

class Left extends _react.default.Component {
  render() {
    const classes = ["media-left"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("figure", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

Left.propTypes = {
  className: _props.classNamePropType,
  ..._props.allModifiersPropList,
  children: _propTypes.default.node
};
Media.Left = Left;
/**
 * Props:
 * - className
 * - All Bulma modifiers
 */

class Content extends _react.default.Component {
  render() {
    const classes = ["media-content"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

Content.propTypes = {
  className: _props.classNamePropType,
  ..._props.allModifiersPropList,
  children: _propTypes.default.node
};
Media.Content = Content;
/**
 * Props:
 * - className
 * - All Bulma modifiers
 */

class Right extends _react.default.Component {
  render() {
    const classes = ["media-right"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.Right = Right;
Right.propTypes = {
  className: _props.classNamePropType,
  ..._props.allModifiersPropList,
  children: _propTypes.default.node
};
Media.Right = Right;
//# sourceMappingURL=media.js.map
