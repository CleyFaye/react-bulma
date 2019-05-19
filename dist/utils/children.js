"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderChildrenWithProps = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const renderChildrenWithProps = (props, propList, extraProps) => {
  const replacement = Object.assign({}, extraProps ? extraProps : {});
  Object.keys(propList).forEach(replacementPropName => {
    let sourcePropName = propList[replacementPropName];

    if (sourcePropName === true) {
      sourcePropName = replacementPropName;
    }

    if (props[sourcePropName]) {
      replacement[replacementPropName] = props[sourcePropName];
    }
  });

  if (Object.keys(replacement).length > 0) {
    return _react.default.Children.map(props.children, child => _react.default.cloneElement(child, replacement));
  }

  return props.children;
};

exports.renderChildrenWithProps = renderChildrenWithProps;
//# sourceMappingURL=children.js.map
