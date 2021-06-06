import React from "react";
import PropTypes from "prop-types";

import {bringAll} from "../../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";
import {renderChildrenWithProps} from "../../utils/children.js";
import Field from "./field.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Body extends React.Component {
  _renderChildren() {
    return renderChildrenWithProps(
      this.props.children,
      {size: this.props.size},
    );
  }

  render() {
    const classes = ["field-body"];
    bringAll(classes, this.props);
    return <div className={clsx(classes, this.props.className)}>
      <Field>
        {this._renderChildren()}
      </Field>
    </div>;
  }
}
Body.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Body.defaultProps = {className: undefined};
Body.displayName = "Body";
