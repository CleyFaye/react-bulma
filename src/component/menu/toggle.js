import React from "react";
import PropTypes from "prop-types";

import {
  allModifiersPropList,
  classNamePropType,
} from "../../utils/props.js";

/** Display a toggle for the menu */
export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props._toggleParentMenu) {
      this.props._toggleParentMenu();
    }
  }

  render() {
    return <a
      className={this.props.className}
      onClick={this.handleClick}
    >
      {this.props.children}
    </a>;
  }
}
Toggle.propTypes = {
  _toggleParentMenu: PropTypes.func,
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Toggle.defaultProps = {
  _toggleParentMenu: undefined,
  className: undefined,
};
Toggle.displayName = "Toggle";
