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
 * - className
 * - All Bulma modifiers
 */
class Section extends _react.default.Component {
  render() {
    const classes = ["section"];
    (0, _modifier.bringAll)(classes, this.props);
    return _react.default.createElement("section", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.default = Section;
Section.propTypes = { ..._props.allModifiersPropList,
  className: _props.classNamePropType,
  children: _propTypes.default.node
};
//# sourceMappingURL=section.js.map
