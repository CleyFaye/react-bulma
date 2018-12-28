import PropTypes from "prop-types";

import {boolList} from "./const";
import {boolProp} from "./transform";

import {
  colorList,
  fullColorList,
  sizeList,
  alignmentList,
  capitalizationList,
  textWeightList,
  breakpointList,
} from "./const";

/** Create a list of boolean options suitable to use as the supportedOptions
 * argument for addClassesFromOptions().
 *
 * @param {string[]} optionNames
 */
export const boolOptions = optionNames => optionNames.reduce((acc, cur) => {
  acc[cur] = {
    list: boolList,
    transform: boolProp(cur),
  };
  return acc;
}, {});

/** Create a proptypes for a property that can be prefixed with breakpoints */
export const viewportPrefixablePropType = baseType => PropTypes.oneOfType([
  baseType,
  PropTypes.shape({
    mobile: baseType,
    tablet: baseType,
    desktop: baseType,
    widescreen: baseType,
    fullhd: baseType,
    tabletOnly: baseType,
    desktopOnly: baseType,
    widescreenOnly: baseType,
    touch: baseType,
  }),
]);

/** PropTypes for breakpoints */
export const breakpointPropType = PropTypes.oneOf(Object.keys(breakpointList));

/** PropTypes for className */
export const classNamePropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
]);

/** List of PropTypes for common modifiers */
export const modifiersPropsList = {
  color: PropTypes.oneOf(colorList),
  size: PropTypes.oneOf(sizeList),
  outlined: PropTypes.bool,
  loading: PropTypes.bool,
  pulledLeft: PropTypes.bool,
  pulledRight: PropTypes.bool,
  marginLess: PropTypes.bool,
  paddingLess: PropTypes.bool,
  overlay: PropTypes.bool,
  clipped: PropTypes.bool,
  radiusless: PropTypes.bool,
  shadowless: PropTypes.bool,
  unselectable: PropTypes.bool,
  invisible: PropTypes.bool,
  srOnly: PropTypes.bool,
};

/** PropTypes for responsive modifiers */
export const responsiveProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
]);

/** PropTypes for text/background color modifiers */
export const colorOverrideProps = PropTypes.oneOf(fullColorList);

/** PropTypes for text size modifier */
export const textSizeProps = PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]);

/** PropTypes for text alignment modifiers */
export const textAlignProps = PropTypes.oneOf(alignmentList);

/** List of proptypes for text transformation */
export const textTransformPropsList = {
  capitalization: PropTypes.oneOf(capitalizationList),
  italic: PropTypes.bool,
  textWeight: PropTypes.oneOf(textWeightList),
};

/** Shortcut with all common modifiers proptypes */
export const allModifiersPropList = {
  textColor: colorOverrideProps,
  backgroundColor: colorOverrideProps,
  ...modifiersPropsList,
  responsive: responsiveProps,
  textAlign: textAlignProps,
  textSize: textSizeProps,
  ...textTransformPropsList,
};
