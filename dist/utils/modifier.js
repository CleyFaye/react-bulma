"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bringTextTransform = exports.bringTextAlign = exports.bringTextSize = exports.bringColorOverride = exports.bringResponsive = exports.bringModifiers = exports.bringAll = void 0;

var _const = require("./const");

var _class = require("./class");

var _transform = require("./transform");

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
const bringAll = (classes, propList, options) => {
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
      textWeight: true
    };
  }

  bringModifiers(classes, propList, options);
  bringColorOverride(classes, propList, options);
  bringTextTransform(classes, propList, options);
  bringSinglePropFromOptions(classes, propList, options, {
    responsive: bringResponsive,
    textSize: bringTextSize,
    textAlign: bringTextAlign
  });
};

exports.bringAll = bringAll;

const bringSinglePropFromOptions = (classes, propList, options, helpers) => Object.keys(helpers).reduce((classes, helperName) => {
  const optionDef = options[helperName];

  if (!optionDef) {
    return classes;
  }

  const propName = typeof optionDef == "string" ? optionDef : helperName;
  return helpers[helperName](classes, propList[propName]);
}, classes);
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


const bringModifiers = (classes, propList, options) => (0, _class.addClassesFromOptions)(classes, propList, options, {
  color: {
    list: _const.colorList
  },
  size: {
    list: _const.sizeList
  },
  outlined: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("outlined")
  },
  loading: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("loading")
  },
  pulledLeft: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("pulled-left")
  },
  pulledRight: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("pulled-right")
  },
  maringLess: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("marginless")
  },
  paddingLess: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("paddingless")
  },
  overlay: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("overlay")
  },
  clipped: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("clipped")
  },
  radiusless: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("radiusless")
  },
  shadowless: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("shadowless")
  },
  unselectable: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("unselectable")
  },
  invisible: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("invisible")
  },
  srOnly: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("sr-only")
  }
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


exports.bringModifiers = bringModifiers;

const bringResponsive = (classes, prop) => {
  if (!prop) {
    return classes;
  }

  (0, _class.addClassesWithViewportSuffix)(classes, prop, value => {
    if (!_const.responsiveHelperList[value]) {
      throw new Error(`Unknown helper name "${value}"`);
    }

    return `is-${_const.responsiveHelperList[value]}`;
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


exports.bringResponsive = bringResponsive;

const bringColorOverride = (classes, propList, options) => (0, _class.addClassesFromOptions)(classes, propList, options, {
  textColor: {
    list: _const.fullColorList,
    transform: value => `has-text-${value}`
  },
  backgroundColor: {
    list: _const.fullColorList,
    transform: value => `has-background-${value}`
  }
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


exports.bringColorOverride = bringColorOverride;

const bringTextSize = (classes, prop) => {
  if (!prop) {
    return classes;
  }

  (0, _class.addClassesWithViewportSuffix)(classes, prop, size => {
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


exports.bringTextSize = bringTextSize;

const bringTextAlign = (classes, prop) => {
  if (!prop) {
    return classes;
  }

  (0, _class.addClassesWithViewportSuffix)(classes, prop, alignment => {
    if (!_const.alignmentList.includes(alignment)) {
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


exports.bringTextAlign = bringTextAlign;

const bringTextTransform = (classes, propList, options) => (0, _class.addClassesFromOptions)(classes, propList, options, {
  capitalization: {
    list: _const.capitalizationList
  },
  italic: {
    list: _const.boolList,
    transform: (0, _transform.boolProp)("italic")
  },
  textWeight: {
    list: _const.textWeightList,
    transform: value => `has-text-weight-${value}`
  }
});

exports.bringTextTransform = bringTextTransform;
//# sourceMappingURL=modifier.js.map
