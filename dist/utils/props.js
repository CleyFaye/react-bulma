"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allModifiersPropList = exports.textTransformPropsList = exports.textAlignProps = exports.textSizeProps = exports.colorOverrideProps = exports.responsiveProps = exports.modifiersPropsList = exports.classNamePropType = exports.breakpointPropType = exports.viewportPrefixablePropType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _const = require("./const");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Create a proptypes for a property that can be prefixed with breakpoints */
const viewportPrefixablePropType = baseType => _propTypes.default.oneOfType([baseType, _propTypes.default.shape({
  mobile: baseType,
  tablet: baseType,
  desktop: baseType,
  widescreen: baseType,
  fullhd: baseType,
  tabletOnly: baseType,
  desktopOnly: baseType,
  widescreenOnly: baseType,
  touch: baseType
})]);
/** PropTypes for breakpoints */


exports.viewportPrefixablePropType = viewportPrefixablePropType;

const breakpointPropType = _propTypes.default.oneOf(Object.keys(_const.breakpointList));
/** PropTypes for className */


exports.breakpointPropType = breakpointPropType;

const classNamePropType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]);
/** List of PropTypes for common modifiers */


exports.classNamePropType = classNamePropType;
const modifiersPropsList = {
  color: _propTypes.default.oneOf(_const.colorList),
  size: _propTypes.default.oneOf(_const.sizeList),
  outlined: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  pulledLeft: _propTypes.default.bool,
  pulledRight: _propTypes.default.bool,
  marginLess: _propTypes.default.bool,
  paddingLess: _propTypes.default.bool,
  overlay: _propTypes.default.bool,
  clipped: _propTypes.default.bool,
  radiusless: _propTypes.default.bool,
  shadowless: _propTypes.default.bool,
  unselectable: _propTypes.default.bool,
  invisible: _propTypes.default.bool,
  srOnly: _propTypes.default.bool
};
/** PropTypes for responsive modifiers */

exports.modifiersPropsList = modifiersPropsList;

const responsiveProps = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]);
/** PropTypes for text/background color modifiers */


exports.responsiveProps = responsiveProps;

const colorOverrideProps = _propTypes.default.oneOf(_const.fullColorList);
/** PropTypes for text size modifier */


exports.colorOverrideProps = colorOverrideProps;

const textSizeProps = _propTypes.default.oneOf([1, 2, 3, 4, 5, 6, 7]);
/** PropTypes for text alignment modifiers */


exports.textSizeProps = textSizeProps;

const textAlignProps = _propTypes.default.oneOf(_const.alignmentList);
/** List of proptypes for text transformation */


exports.textAlignProps = textAlignProps;
const textTransformPropsList = {
  capitalization: _propTypes.default.oneOf(_const.capitalizationList),
  italic: _propTypes.default.bool,
  textWeight: _propTypes.default.oneOf(_const.textWeightList)
};
/** Shortcut with all common modifiers proptypes */

exports.textTransformPropsList = textTransformPropsList;
const allModifiersPropList = {
  textColor: colorOverrideProps,
  backgroundColor: colorOverrideProps,
  ...modifiersPropsList,
  responsive: responsiveProps,
  textAlign: textAlignProps,
  textSize: textSizeProps,
  ...textTransformPropsList
};
exports.allModifiersPropList = allModifiersPropList;
//# sourceMappingURL=props.js.map
