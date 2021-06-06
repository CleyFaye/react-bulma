import React from "react";
import PropTypes from "prop-types";

import {classString} from "../../utils/class.js";
import {bringAll} from "../../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";
import {renderChildrenWithProps} from "../../utils/children.js";
import Field from "./field.js";

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
export default class Body extends React.Component {
  _renderChildren() {
    return renderChildrenWithProps(
      this.props,
      {size: true},
    );
  }

  render() {
    const classes = ["field-body"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      <Field>
        {this._renderChildren()}
      </Field>
    </div>;
  }
}
Body.propTypes = {
  className: classNamePropType,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Body.defaultProps = {className: undefined};
Body.displayName = "Body";
