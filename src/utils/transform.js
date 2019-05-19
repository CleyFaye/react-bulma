/** Convert a boolean property value into a CSS class name
 * 
 * @param {string} propName
 * 
 * @returns {function}
 * Return a function that take the property value as its only parameter and
 * return the appropriate string.
 */
export const boolProp = propName => value => value
  ? `is-${propName}`
  : "";