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
 * Props:
 * - className
 * - help(string): help text
 * - addons(bool): link together multiple controls (input/dropdown/button)
 * - group(bool): group controls together. Predates addons.
 * - multiline(bool): if group should span on multiple lines
 * - position("left", "center", "right"): addons/group bundle position (default
 * to left)
 * - horizontal(bool): display label and control on the same line
 * - All bulma modifiers
 * 
 * @note
 * Using horizontal field require wrapping the label and content respectively
 * in Field.Label and Field.Body
 */
class Field extends _react.default.Component {
  /** Add the position class for the specified bundle type */
  _addPosition(classes, bundleType) {
    switch (this.props.position) {
      case "center":
        classes.push(`has-${bundleType}-centered`);
        break;

      case "right":
        classes.push(`has-${bundleType}-right`);
        break;
    }
  }

  _renderChildren() {
    return (0, _children.renderChildrenWithProps)(this.props, {
      size: true
    });
  }

  render() {
    const classes = ["field"];
    (0, _modifier.bringAll)(classes, this.props);

    if (this.props.horizontal) {
      classes.push("is-horizontal");
    }

    if (this.props.group) {
      classes.push("is-grouped");

      this._addPosition(classes, "grouped");

      if (this.props.multiline) {
        classes.push("is-grouped-multiline");
      }
    } else if (this.props.addons) {
      classes.push("has-addons");

      this._addPosition(classes, "addons");
    }

    const helpElement = this.props.help ? _react.default.createElement("p", {
      className: "help"
    }, this.props.help) : undefined;
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this._renderChildren(), helpElement);
  }

}

exports.default = Field;
Field.propTypes = {
  className: _props.classNamePropType,
  children: _propTypes.default.node,
  help: _propTypes.default.string,
  addons: _propTypes.default.bool,
  group: _propTypes.default.bool,
  horizontal: _propTypes.default.bool,
  multiline: _propTypes.default.bool,
  position: _propTypes.default.oneOf(["left", "center", "right"]),
  ..._props.allModifiersPropList
};
/**
 * Props:
 * - className
 * - All Bulma modifiers
 */

class Label extends _react.default.Component {
  _renderChildren() {
    return (0, _children.renderChildrenWithProps)(this.props, {
      size: true
    });
  }

  render() {
    const classes = ["field-label"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this._renderChildren());
  }

}

Label.propTypes = {
  className: _props.classNamePropType,
  children: _propTypes.default.node,
  ..._props.allModifiersPropList
};
Field.Label = Label;
/**
 * Props:
 * - className
 * - All Bulma modifiers
 */

class Body extends _react.default.Component {
  _renderChildren() {
    return (0, _children.renderChildrenWithProps)(this.props, {
      size: true
    });
  }

  render() {
    const classes = ["field-body"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, _react.default.createElement(Field, null, this._renderChildren()));
  }

}

Body.propTypes = {
  className: _props.classNamePropType,
  children: _propTypes.default.node,
  ..._props.allModifiersPropList
};
Field.Body = Body;
//# sourceMappingURL=field.js.map
