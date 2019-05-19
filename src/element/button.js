import React from "react";
import PropTypes from "prop-types";

import {boolOptions} from "../utils/props";
import {classString} from "../utils/class";
import {bringAll} from "../utils/modifier";
import {allModifiersPropList} from "../utils/props";
import {classNamePropType} from "../utils/props";
import {addClassesFromOptions} from "../utils/class";

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
      ]));
    return <button
      className={classString(classes, this.props.className)}
      disabled={this.props.disabled}
      onClick={this.props.onClick}>
      {this.props.children}
    </button>;
  }
}
Button.propTypes = {
  className: classNamePropType,
  fullwidth: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  outlined: PropTypes.bool,
  loading: PropTypes.bool,
  static: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  ...allModifiersPropList,
};

/**
 * Props:
 * - joined: attach buttons together
 * - align: either "left", "center" or "right"
 */
export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = ["buttons"];
    if (this.props.joined) {
      classes.push("has-addons");
    }
    if (this.props.align === "center") {
      classes.push("is-centered");
    } else if (this.props.align === "right") {
      classes.push("is-right");
    }
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
List.propTypes = {
  className: classNamePropType,
  joined: PropTypes.bool,
  align: PropTypes.string,
  children: PropTypes.node,
};
Button.List = List;
