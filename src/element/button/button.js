import React from "react";
import PropTypes from "prop-types";

import {
  boolOptions,
  allModifiersPropList,
  classNamePropType,
} from "../../utils/props.js";
import {addClassesFromOptions} from "../../utils/class.js";
import {bringAll} from "../../utils/modifier.js";
import clsx from "clsx";

/**
 * Props:
 * - fullwidth
 * - inverted
 * - rounded
 * - outlined
 * - loading
 * - static
 * - disabled
 * - onClick
 */
export default class Button extends React.Component {
  render() {
    const classes = ["button"];
    bringAll(classes, this.props);
    addClassesFromOptions(
      classes,
      this.props,
      undefined,
      boolOptions([
        "fullwidth",
        "inverted",
        "rounded",
        "outlined",
        "loading",
        "static",
      ]),
    );
    return <button
      type="button"
      className={clsx(classes, this.props.className)}
      disabled={this.props.disabled}
      onClick={this.props.onClick}
    >
      {this.props.children}
    </button>;
  }
}
Button.propTypes = {
  className: classNamePropType,
  // eslint-disable-next-line react/no-unused-prop-types
  fullwidth: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  inverted: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  rounded: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  outlined: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  loading: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  static: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Button.defaultProps = {
  className: undefined,
  fullwidth: false,
  inverted: false,
  rounded: false,
  outlined: false,
  loading: false,
  static: false,
  disabled: false,
  onClick: undefined,
};
Button.displayName = "Button";
