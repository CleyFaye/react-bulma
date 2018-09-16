import {
  colorList,
  fullColorList,
  sizeList,
  boolList,
  responsiveHelperList,
  alignmentList,
  capitalizationList,
  textWeightList,
} from "./const";
import {
  addClassesFromOptions,
  addClassesWithViewportSuffix,
} from "./class";
import {
  boolProp,
} from "./transform";

/** Add all available modifiers in one call
 * 
 * @param {Array.<{string}>} classes
 * @param {hash} propList
 * @param {hash} options
 * Merge all other options list, with addition of:
 * - responsive: see bringResponsive()
 * - textSize: see bringTextSize()
 * - textAlign: see bringTextAlign()
 * If not specified, everything is enabled.
 * 
 * @see
 * Other functions in this module for details.
 */
export const bringAll = (classes, propList, options) => {
  if (!options) {
    options = {
      color: true,
      size: true,
      outlined: true,
      loading: true,
      pulledLeft: true,
      pulledRight: true,
      marginLess: true,
      paddingLess: true,
      overlay: true,
      clipped: true,
      radiusless: true,
      shadowless: true,
      unselectable: true,
      invisible: true,
      srOnly: true,
      responsive: true,
      textColor: true,
      backgroundColor: true,
      textSize: true,
      textAlign: true,
      capitalization: true,
      italic: true,
      textWeight: true,
    };
  }
  bringModifiers(classes, propList, options);
  bringColorOverride(classes, propList, options);
  bringTextTransform(classes, propList, options);
  bringSinglePropFromOptions(
    classes,
    propList,
    options,
    {
      responsive: bringResponsive,
      textSize: bringTextSize,
      textAlign: bringTextAlign,
    });
};

const bringSinglePropFromOptions = 
  (classes, propList, options, helpers) => Object.keys(helpers).reduce(
    (classes, helperName) => {
      const optionDef = options[helperName];
      if (!optionDef) {
        return classes;
      }
      const propName = typeof optionDef == "string" ? optionDef : helperName;
      return helpers[helperName](classes, propList[propName]);
    },
    classes);

/** Add common modifiers into a list of classes
 *
 * @param {Array.<{string}>} classes
 * @param {hash} propList
 * @param {hash} options
 * List of modifiers to merge into classes.
 * Each property can have either "true" or a name as their value.
 * If true, the property name is used as a lookup into propList.
 * Otherwise a property with the given name is used instead.
 * Supported properties:
 * - color (primary, link, info, success, warning, danger)
 * - size (small, medium, large)
 * - outlined
 * - loading
 * - pulledLeft
 * - pulledRight
 * - marginLess
 * - paddingLess
 * - overlay
 * - clipped
 * - radiusless
 * - shadowless
 * - unselectable
 * - invisible
 * - srOnly
 */
export const bringModifiers = (classes, propList, options) => 
  addClassesFromOptions(
    classes,
    propList,
    options,
    {
      color: {list: colorList},
      size: {list: sizeList},
      outlined: {list: boolList, transform: boolProp("outlined")},
      loading: {list: boolList, transform: boolProp("loading")},
      pulledLeft: {list: boolList, transform: boolProp("pulled-left")},
      pulledRight: {list: boolList, transform: boolProp("pulled-right")},
      maringLess: {list: boolList, transform: boolProp("marginless")},
      paddingLess: {list: boolList, transform: boolProp("paddingless")},
      overlay: {list: boolList, transform: boolProp("overlay")},
      clipped: {list: boolList, transform: boolProp("clipped")},
      radiusless: {list: boolList, transform: boolProp("radiusless")},
      shadowless: {list: boolList, transform: boolProp("shadowless")},
      unselectable: {list: boolList, transform: boolProp("unselectable")},
      invisible: {list: boolList, transform: boolProp("invisible")},
      srOnly: {list: boolList, transform: boolProp("sr-only")},
    });

/** Add common responsive helpers into a list of classes
 *
 * @param {Array.<{string}>} classes
 * @param {string|hash} prop
 * The show/hide class to use. It can be either a string or a hash,
 * in which case each key must be a proper viewport name and each value the
 * helper class to use.
 * 
 * @returns {Array.<{string}>}
 * Return classes
 * 
 * @note
 * This correspond to the responsive helpers documentation from Bulma.io.
 */
export const bringResponsive = (classes, prop) => {
  if (!prop) {
    return classes;
  }
  addClassesWithViewportSuffix(
    classes,
    prop,
    value => {
      if (!responsiveHelperList[value]) {
        throw new Error(`Unknown helper name "${value}"`);
      }
      return `is-${responsiveHelperList[value]}`;
    });
  return classes;
};

/** Add common text and background color selector.
 * 
 * @param {Array.<{string}>} classes
 * @param {hash} propList
 * @param {hash} options
 * Select which modifier to use. See bringModifiers() for details.
 * Available options:
 * - textColor
 * - backgroundColor
 */
export const bringColorOverride = (classes, propList, options) =>
  addClassesFromOptions(
    classes,
    propList,
    options,
    {
      textColor: {
        list: fullColorList,
        transform: value => `has-text-${value}`,
      },
      backgroundColor: {
        list: fullColorList,
        transform: value => `has-background-${value}`,
      },
    });

/** Add test size specifier to list of classes
 * 
 * @param {Array.<{string}>} classes
 * @param {number|hash} prop
 * Text size property. Either a number from 1 to 7 or a hash where keys are
 * viewport names and values are sizes.
 * 
 * @returns {Array.<{string}>}
 * Return classes
 */
export const bringTextSize = (classes, prop) => {
  if (!prop) {
    return classes;
  }
  addClassesWithViewportSuffix(
    classes,
    prop,
    size => {
      if (size < 1 || size > 7) {
        throw new Error(`Invalid size ${size} (1 <= size <= 7)`);
      }
      return `is-size-${size}`;
    });
  return classes;
};

/** Add test alignment specifier to list of classes
 * 
 * @param {Array.<{string}>} classes
 * @param {string|hash} prop
 * Text size property. Either an alignment value or a hash where keys are
 * viewport names and values are alignment.
 * Valid values:
 * - centered
 * - justified
 * - left
 * - right
 * 
 * @returns {Array.<{string}>}
 * Return classes
 */
export const bringTextAlign = (classes, prop) => {
  if (!prop) {
    return classes;
  }
  addClassesWithViewportSuffix(
    classes,
    prop,
    alignment => {
      if (!alignmentList.includes(alignment)) {
        throw new Error(`Invalid alignment "${alignment}"`);
      }
      return `has-text-${alignment}`;
    });
  return classes;
};

/** Add common text modifiers into a list of classes
 *
 * @param {Array.<{string}>} classes
 * @param {hash} propList
 * @param {hash} options
 * List of modifiers to merge into classes.
 * Each property can have either "true" or a name as their value.
 * If true, the property name is used as a lookup into propList.
 * Otherwise a property with the given name is used instead.
 * Supported properties:
 * - capitalization (capitalized, lowercase, uppercase)
 * - italic
 * - textWeight (light, normal, semibold, bold)
 */
export const bringTextTransform = (classes, propList, options) =>
  addClassesFromOptions(
    classes,
    propList,
    options,
    {
      capitalization: {list: capitalizationList},
      italic: {list: boolList, transform: boolProp("italic")},
      textWeight: {
        list: textWeightList,
        transform: value => `has-text-weight-${value}`,
      },
    });