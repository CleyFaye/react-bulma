/* eslint-disable no-magic-numbers */
import React from "react";
import PropTypes from "prop-types";

import {
  classString,
  addClassesWithViewportSuffix,
} from "../utils/class.js";
import {
  classNamePropType,
  viewportPrefixablePropType,
  allModifiersPropList,
} from "../utils/props.js";
import {bringAll} from "../utils/modifier.js";

/** Acceptable value for column size */
const fractionSizeList = {
  "3/4": "three-quarters",
  "2/3": "two-thirds",
  "1/2": "half",
  "1/3": "one-third",
  "1/4": "one-quarter",
  "1/5": "one-fifth",
  "2/5": "two-fifths",
  "3/5": "three-fifths",
  "4/5": "four-fifths",
};

/** Convert a human readable column size to a class name.
 *
 * @param {number|string} size
 * @param {bool} isOffset
 * True to get an offset instead of a column size
 *
 * @returns {string}
 */
const columnSizeToClassName = (size, isOffset) => {
  const prefix = isOffset ? "is-offset" : "is-";
  const asInt = parseInt(size, 10);
  if (asInt === 1) {
    return undefined;
  }
  if (asInt >= 2 && asInt <= 11) {
    return `${prefix}${asInt}`;
  }
  if (fractionSizeList[size]) {
    return `${prefix}${fractionSizeList[size]}`;
  }
  if (Object.values(fractionSizeList).includes(size)) {
    return `${prefix}${size}`;
  }
  throw new Error(`Invalid column size "${size}"`);
};

/** PropType for a single size value */
const columnSizePropTypes = PropTypes.oneOf([
  ...Object.keys(fractionSizeList),
  ...Object.values(fractionSizeList),
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
]);

/**
 * Props:
 * - colSize: either a division of 12 (1, 2, 3...), a textual name from Bulma
 *   (four-fifths, three-quarters) or an equivalent fraction ("3/4", "2/3",
 *   "1/2", "1/3", "1/4", "1/5", "2/5", "3/5", "4/5").
 *   To set different size for different viewports use an object whose keys are
 *   viewport names ("mobile", "tablet", "desktop", "widescreen", "fullhd")
 * - colOffset: space before the column. Same convention as size.
 * - narrow: bool|array: if true, the column is always narrow. If an array, it
 *   must be a list of valid breakpoints.
 * - All Bulma modifiers
 */
export default class Column extends React.Component {
  render() {
    const classes = ["column"];
    bringAll(classes, this.props);
    addClassesWithViewportSuffix(
      classes,
      this.props.colSize,
      value => columnSizeToClassName(value, false),
    );
    addClassesWithViewportSuffix(
      classes,
      this.props.colOffset,
      value => columnSizeToClassName(value, true),
    );
    addClassesWithViewportSuffix(
      classes,
      this.props.narrow,
      () => "is-narrow",
    );
    return <div
      className={classString(classes, this.props.className)}
    >
      {this.props.children}
    </div>;
  }
}
Column.propTypes = {
  className: classNamePropType,
  ...allModifiersPropList,
  colSize: viewportPrefixablePropType(columnSizePropTypes),
  colOffset: viewportPrefixablePropType(columnSizePropTypes),
  narrow: viewportPrefixablePropType(PropTypes.bool),
  children: PropTypes.node.isRequired,
};
Column.defaultProps = {
  className: undefined,
  colSize: undefined,
  colOffset: undefined,
  narrow: undefined,
};
Column.displayName = "Column";
