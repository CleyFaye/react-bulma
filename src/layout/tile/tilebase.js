/* eslint-disable no-magic-numbers */
import React from "react";
import PropTypes from "prop-types";

import {addClassesFromOptions} from "../../utils/class.js";
import {boolList} from "../../utils/const.js";
import {boolProp} from "../../utils/transform.js";
import {classNamePropType} from "../../utils/props.js";
import clsx from "clsx";

/** List of possible tile width */
const widthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default class TileBase extends React.Component {
  constructor(props, isAncestor, isChild) {
    super(props);
    this.state = {_parent: false, ...this.state || {}};
    this._isAncestor = isAncestor;
    this._isChild = isChild;
  }

  // eslint-disable-next-line class-methods-use-this
  getBaseClasses() {
    throw new Error("Not implemented");
  }

  render() {
    const classes = this.getBaseClasses();
    addClassesFromOptions(
      classes,
      this.props,
      undefined,
      {
        vertical: {list: boolList, transform: boolProp("vertical")},
        width: {list: widthList},
      },
    );
    if (this.state._parent) {
      classes.push("is-parent");
    }
    if (this._isAncestor) {
      classes.push("is-ancestor");
    }
    if (this._isChild) {
      classes.push("is-child");
    }
    return <div className={clsx(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
TileBase.propTypes = {
  className: classNamePropType,
  // eslint-disable-next-line react/no-unused-prop-types
  width: PropTypes.oneOf(widthList),
  // eslint-disable-next-line react/no-unused-prop-types
  vertical: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
TileBase.defaultProps = {
  className: undefined,
  width: undefined,
  vertical: false,
};
TileBase.displayName = "TileBase";
