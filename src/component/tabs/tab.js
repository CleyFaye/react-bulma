import React from "react";
import PropTypes from "prop-types";

import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";
import {classString} from "../../utils/class.js";
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
    // TODO use utils for that too?
    if (this.props.active) {
      classes.push("is-active");
    }
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
