import React from "react";
import PropTypes from "prop-types";

import {addClassesFromOptions} from "../utils/class.js";
import {boolList} from "../utils/const.js";
import {boolProp} from "../utils/transform.js";
import {classNamePropType} from "../utils/props.js";
import clsx from "clsx";

/* eslint-disable no-magic-numbers */
/** Acceptable value for gap size */
const gapList = [
  "gapless",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
];
/* eslint-enable no-magic-numbers */

/**
 * Props:
 * - mobile: bool Enable the columns on mobile too (default false)
 * - desktopOnly: bool Enable the columns only on desktop (default false)
 * - gap: number (0-8) size of the gap between columns
 * - multiline: bool
 * - center: bool
 */
export default class Columns extends React.Component {
  render() {
    const classes = ["columns"];
    addClassesFromOptions(
      classes,
      this.props,
      undefined,
      {
        mobile: {list: boolList, transform: boolProp("mobile")},
        desktopOnly: {list: boolList, transform: boolProp("desktop")},
        center: {list: boolList, transform: boolProp("centered")},
        multiline: {list: boolList, transform: boolProp("mutliline")},
        gap: {list: gapList},
      },
    );
    return <div
      className={clsx(classes, this.props.className)}
    >
      {this.props.children}
    </div>;
  }
}
Columns.propTypes = {
  className: classNamePropType,
  // eslint-disable-next-line react/no-unused-prop-types
  mobile: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  desktopOnly: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  gap: PropTypes.oneOf(gapList),
  // eslint-disable-next-line react/no-unused-prop-types
  multiline: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
Columns.defaultProps = {
  className: undefined,
  mobile: false,
  desktopOnly: false,
  gap: undefined,
  multiline: false,
  center: false,
};
Columns.displayName = "Columns";
