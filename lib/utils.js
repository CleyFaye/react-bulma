/*eslint-env commonjs */
let dummyNameId = 0;

/** Return a unique dummy name */
export let getDummyName = () => `dummy${dummyNameId++}`;

/** Convert a color name to a bulma class.
 *
 * @param {string} colorName
 * @returns {string}
 */
export let colorToClass = colorName => {
    switch (colorName) {
    case "primary":
    case "link":
    case "info":
    case "success":
    case "warning":
    case "danger":
    case "white":
    case "light":
    case "dark":
    case "black":
        return `is-${colorName}`;
    }
    throw new Error(`Unknown color name "${colorName}"`);
};

/** Convert a size name to a CSS class
 * @param {string} sizeName
 * @returns {string}
 */
export let sizeToClass = sizeName => {
    switch (sizeName) {
    case "small":
    case "normal":
    case "medium":
    case "large":
        return `is-${sizeName}`;
    }
    throw new Error(`Unknown size name "${sizeName}"`);
};

/** Add common modifier classes to an array of classes
 * @param {object} props
 * @param {Array.<{string}>} classes
 * List of classes to update
 * @param {object} options
 * Options to ignore some values. Accepted properties:
 * - ignoreFullWidth: Don't check "fullwidth" prop
 * - ignoreSize: Don't check "size" prop
 * - ignoreColor: Don't check "color" prop
 * - ignoreInverted: Don't check "inverted" prop
 * - ignoreLoading: Don't check "loading" prop
 */
export let commonModifiers = (props, classes, options) => {
    if (!options) {
        options = {};
    }
    if (!options.ignoreFullWidth && props.fullwidth) {
        classes.push("is-fullwidth");
    }
    if (!options.ignoreSize && props.size) {
        classes.push(sizeToClass(props.size));
    }
    if (!options.ignoreColor && props.color) {
        classes.push(colorToClass(props.color));
    }
    if (!options.ignoreInverted && props.inverted) {
        classes.push("is-inverted");
    }
    if (!options.ignoreLoading && props.loading) {
        classes.push("is-loading");
    }
};
