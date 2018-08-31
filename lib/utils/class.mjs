import {
  breakpointList,
} from "./const";

/** Add a class in a list of classes according to a property value
 * 
 * @param {Array.<{string}>} classes
 * @param {string} property
 * @param {Array.<{string}>} list
 * List of valid values for property
 * 
 * @param {function} transform
 * Transformation to convert property to a value to append to classes.
 * Default to prepending "is-".
 * 
 * @returns {Array.<{string}>}
 * Return classes
 */
export const addClassFromList = (classes, property, list, transform) => {
  if ((typeof property) !== "undefined") {
    if (!list.includes(property)) {
      throw new Error(`Unexpected value "${property}" `
        + `(must be ${list.map(elem => `"${elem}"`).join(",")})`);
    }
    classes.push(transform
      ? transform(property)
      : `is-${property}`);
  }
  return classes;
};

/** Add classes to a list of classes according to a set of options.
 * 
 * @param {Array.<{string}>} classes
 * @param {hash} propList
 * @param {hash} options
 * Requested option from the caller
 * 
 * @param {hash} supportedOptions
 * List of supported options. Each key is an option name, each value is an
 * object with these two properties:
 * - list: possible values for the property
 * - transform: transform function (see addClassFromList())
 * 
 * @returns {Array.<{string}>}
 * Return classes
 */
export const addClassesFromOptions = 
  (classes, propList, options, supportedOptions) => 
    Object.keys(supportedOptions).reduce((classes, supportedOptionName) => {
      const option = options[supportedOptionName];
      if (!option) {
        return classes;
      }
      const supportedOption = supportedOptions[supportedOptionName]
      return addClassFromList(
        classes,
        propList[(typeof option === "string")
          ? option
          : supportedOptions],
        supportedOption.list,
        supportedOption.transform);
    });

/** Add classes to a list with viewport suffixed to them.
 * 
 * @param {Array.<{string}>} classes
 * @param {string|hash} values
 * List of values for each viewport. Key are viewport names, values are
 * property values.
 * If a string is passed, no viewport prefix are added.
 * 
 * @param {function} transform
 * Function that take as input a property value and returns the CSS class name.
 * 
 * @returns {Array.<{string}>}
 * Return classes
 */
export const addClassesWithViewportSuffix = (classes, values, transform) => {
  if (typeof values === "string") {
    classes.push(transform(values));
  }
  values = [values];
  Object.keys(values).forEach(viewportName => {
    if (!breakpointList[viewportName]) {
      throw new Error(`Invalid viewport name "${viewportName}"`);
    }
    const className = transform(values[viewportName]);
    const breakName = breakpointList[viewportName];
    classes.push(`${className}-${breakName}`);
  });
  return classes;
};