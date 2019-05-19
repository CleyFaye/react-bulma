"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boolProp = void 0;

/** Convert a boolean property value into a CSS class name
 * 
 * @param {string} propName
 * 
 * @returns {function}
 * Return a function that take the property value as its only parameter and
 * return the appropriate string.
 */
const boolProp = propName => value => value ? `is-${propName}` : "";

exports.boolProp = boolProp;
//# sourceMappingURL=transform.js.map
