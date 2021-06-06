import React from "react";
import PropTypes from "prop-types";

import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";
import {addClassesFromOptions, classString} from "../../utils/class.js";
import {bringAll} from "../../utils/modifier.js";

/**
 * Props:
 * - className
 * - active (automatically set by Tabs)
 * - onClick
 * - All Bulma modifiers
 */
export default class Tab extends React.Component {
  render() {
    const classes = [];
    addClassesFromOptions(
      classes,
      this.props,
      {"active": "is-active"},
    );
    bringAll(classes, this.props);
    return <li
      className={classString(classes, this.props.className)}
      onClick={this.props.onClick}
    >
      <a>
        {this.props.children}
      </a>
    </li>;
  }
}
Tab.propTypes = {
  className: classNamePropType,
  // eslint-disable-next-line react/no-unused-prop-types
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  ...allModifiersPropList,
};
Tab.defaultProps = {
  className: undefined,
  active: false,
  onClick: undefined,
};
Tab.displayName = "Tab";
