import React from "react";
import PropTypes from "prop-types";

import {classString} from "../utils/class";
import {bringAll} from "../utils/modifier";
import {allModifiersPropList} from "../utils/props";
import {classNamePropType} from "../utils/props";

/**
 * Props:
 * - subtitle
 * - spaced(bool): keep title and subtitle separate (use on the title)
 * - titleSize(1,2,3,4). Default to 3.
 * - All Bulma modifiers
 */
export default class Title extends React.Component {
  render() {
    const classes = ["title"];
    let titleSize = this.props.titleSize !== undefined
      ? this.props.titleSize
      : 3;
    if (this.props.subtitle) {
      titleSize += 2;
      classes.push("subtitle");
    }
    if (this.props.spaced) {
      classes.push("is-spaced");
    }
    bringAll(classes, this.props);
    const TagName = `h${titleSize}`;
    return <TagName className={classString(classes, this.props.className)}>
      {this.props.children}
    </TagName>;
  }
}
Title.propTypes = {
  className: classNamePropType,
  subtitle: PropTypes.bool,
  spaced: PropTypes.bool,
  titleSize: PropTypes.oneOf([1, 2, 3, 4]),
  children: PropTypes.node,
  ...allModifiersPropList,
};