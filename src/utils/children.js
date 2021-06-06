import React from "react";

/** Render childrens with some props replacement.
 *
 * @param {hash} props
 * Original object props (including props.children)
 *
 * @param {hash} propList
 * List of props to import from the original object. Each key is a destination
 * prop name, each value is either true to keep the same name or a source prop
 * name.
 * For example, having `size: "iconSize"` would add a prop named "size" to all
 * children with the value from the original "iconSize" prop.
 *
 * @param {hash} extraProps
 * List of props to append to all childs
 *
 * @returns {Node}
 * Something that can be put as a return value for render().
 */
export const renderChildrenWithProps = (
  children,
  props,
) => {
  const replacement = {};
  Object.keys(props).forEach(key => {
    if (props[key] !== undefined) {
      replacement[key] = props[key];
    }
  });
  if (Object.keys(replacement).length > 0) {
    return React.Children.map(props.children, child => React.cloneElement(
      child,
      replacement,
    ));
  }
  return props.children;
};
