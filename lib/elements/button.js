import React from "react";
import PropTypes from "prop-types";

import {commonModifiers} from "./utils";

// TODO Use Button.List instead of ButtonList

/**
 * Props:
 * - label
 * - color (see bulma.colorToClass()) (default to "primary")
 * - size (see bulma.sizeToClass()) (default to "normal")
 * - fullwidth
 * - inverted
 * - rounded
 * - loading
 * - onClick
 */
export class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonClasses = ["button"];
    commonModifiers(this.props, buttonClasses);
    if (this.props.rounded) {
      buttonClasses.push("is-rounded");
    }
    return <a 
      onClick={this.props.onClick}
      className={buttonClasses.join(" ")}>{this.props.label}</a>;
  }
}
Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  fullwidth: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

/**
 * Props:
 * - joined: attach buttons together
 * - align: either "left", "center" or "right"
 */
export class ButtonList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonsClasses = ["buttons"];
    if (this.props.joined) {
      buttonsClasses.push("has-addons");
    }
    if (this.props.align === "center") {
      buttonsClasses.push("is-centered");
    } else if (this.props.align === "right") {
      buttonsClasses.push("is-right");
    }
    return <div className={buttonsClasses.join(" ")}>
      {this.props.children}
    </div>;
  }
}
ButtonList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  joined: PropTypes.bool,
  align: PropTypes.string,
};
