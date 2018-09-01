import {
  breakpointList,
  viewportList,
} from "./const";

/** Return a class string from an array of classes
 * 
 * @param {Array.<{string}>} classes
 * List of classes to use
 * 
 * @param {string|Array.<{string}>} extraClassName
 * Extra classes to append to the list of classes.
 * Usually used to pull custom classes with the className prop.
 * Can be either a string or an array of strings.
 * 
 * @returns {string}
 */
export const classString = (classes, extraClassName) => {
  if (!classes) {
    classes = [];
  }
  if (extraClassName) {
    if (typeof extraClassName == "string") {
      extraClassName = extraClassName.split(" ");
    }
  } else {
    extraClassName = [];
  }
  const classesSet = new Set([...classes, ...extraClassName]);
  return classesSet.size == 0
    ? undefined
    : Array.from(classesSet.values()).join(" ");
};

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
 * 
 * @note
 * If options is undefined, all supported options are checked.:
 */
export const addClassesFromOptions = 
  (classes, propList, options, supportedOptions) => 
    Object.keys(supportedOptions).reduce((classes, supportedOptionName) => {
      const option = options
        ? options[supportedOptionName]
        : true;
      if (!option) {
        return classes;
      }
      const supportedOption = supportedOptions[supportedOptionName];
      return addClassFromList(
        classes,
        propList[(typeof option === "string")
          ? option
          : supportedOptionName],
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
 * @param {bool} onlyBreakpoint
 * Only accept full breakpoint. If false, viewport definition are also accepted.
 * 
 * @returns {Array.<{string}>}
 * Return classes
 */
export const addClassesWithViewportSuffix = (classes, values, transform, onlyBreakpoint) => {
  if (!values) {
    return classes;
  }
  const acceptableList = onlyBreakpoint
    ? breakpointList
    : viewportList;
  if (typeof values === "string") {
    classes.push(transform(values));
  }
  values = [values];
  Object.keys(values).forEach(viewportName => {
    if (!acceptableList[viewportName]) {
      throw new Error(`Invalid viewport name "${viewportName}"`);
    }
    const className = transform(values[viewportName]);
    if (!className) {
      return;
    }
    const breakName = acceptableList[viewportName];
    classes.push(`${className}-${breakName}`);
  });
  return classes;
};