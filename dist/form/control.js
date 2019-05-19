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

var _children = require("../utils/children");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * For holding input, select, button.
 * 
 * Props:
 * - className
 * - iconLeft
 * - iconRight
 * - iconSize
 * - expanded(bool)
 * - stateObj: used to override loading if stateObj.state.loading is true.
 * - All bulma modifiers
 */
class Control extends _react.default.Component {
  /** Prepare one icon.
   * 
   * @param {Node} iconProp
   * @param {string} position
   * 
   * @returns {Object}
   * The prepared icon (or undefined if no icon provided)
   */
  _prepareIcon(iconProp, position) {
    if (!iconProp) {
      return;
    }

    const classes = ["icon"];
    (0, _modifier.bringModifiers)(classes, this.props, {
      size: "iconSize"
    });
    classes.push(`is-${position}`);
    return _react.default.createElement("div", {
      key: position,
      className: (0, _class.classString)(classes)
    }, iconProp);
  }
  /** Prepare the icons.
   * 
   * @param {Array.<{string}>} controlClasses
   * 
   * @return {Array.<{object}>}
   * Array of elements to display.
   */


  _prepareIcons(controlClasses) {
    const result = [];

    if (this.props.iconLeft) {
      controlClasses.push("has-icons-left");
      result.push(this._prepareIcon(this.props.iconLeft, "left"));
    }

    if (this.props.iconRight) {
      controlClasses.push("has-icons-right");
      result.push(this._prepareIcon(this.props.iconRight, "right"));
    }

    return result;
  }

  _renderChildren() {
    return (0, _children.renderChildrenWithProps)(this.props, {
      size: true
    });
  }

  render() {
    const classes = ["control"];
    (0, _modifier.bringAll)(classes, this.props);

    if (this.props.expanded) {
      classes.push("is-expanded");
    }

    if (this.props.stateObj && this.props.stateObj.state.loading) {
      classes.push("is-loading");
    }

    const icons = this._prepareIcons(classes);

    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children, icons);
  }

}

exports.default = Control;
Control.propTypes = {
  className: _props.classNamePropType,
  children: _propTypes.default.node,
  iconLeft: _propTypes.default.node,
  iconRight: _propTypes.default.node,
  iconSize: _props.allModifiersPropList.size,
  expanded: _propTypes.default.bool,
  stateObj: _propTypes.default.object,
  ..._props.allModifiersPropList
};
//# sourceMappingURL=control.js.map
