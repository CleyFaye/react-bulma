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
 * - subtitle
 * - spaced(bool): keep title and subtitle separate (use on the title)
 * - titleSize(1,2,3,4). Default to 3.
 * - All Bulma modifiers
 */
class Title extends _react.default.Component {
  render() {
    const classes = ["title"];
    let titleSize = this.props.titleSize !== undefined ? this.props.titleSize : 3;

    if (this.props.subtitle) {
      titleSize += 2;
      classes.push("subtitle");
    }

    if (this.props.spaced) {
      classes.push("is-spaced");
    }

    (0, _modifier.bringAll)(classes, this.props);
    const TagName = `h${titleSize}`;
    return _react.default.createElement(TagName, {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.default = Title;
Title.propTypes = {
  className: _props.classNamePropType,
  subtitle: _propTypes.default.bool,
  spaced: _propTypes.default.bool,
  titleSize: _propTypes.default.oneOf([1, 2, 3, 4]),
  ..._props.allModifiersPropList
};
//# sourceMappingURL=title.js.map
