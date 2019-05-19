"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Column = exports.Columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class = require("./utils/class");

var _const = require("./utils/const");

var _transform = require("./utils/transform");

var _props = require("./utils/props");

var _modifier = require("./utils/modifier");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Acceptable value for gap size */
const gapList = ["gapless", 0, 1, 2, 3, 4, 5, 6, 7, 8];
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
  "4/5": "four-fifths"
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
  const asInt = parseInt(size);

  if (asInt == 1) {
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
/**
 * Props:
 * - mobile: bool Enable the columns on mobile too (default false)
 * - desktopOnly: bool Enable the columns only on desktop (default false)
 * - gap: number (0-8) size of the gap between columns
 * - multiline: bool
 * - center: bool
 */


class Columns extends _react.default.Component {
  render() {
    const classes = ["columns"];
    (0, _class.addClassesFromOptions)(classes, this.props, undefined, {
      mobile: {
        list: _const.boolList,
        transform: (0, _transform.boolProp)("mobile")
      },
      desktopOnly: {
        list: _const.boolList,
        transform: (0, _transform.boolProp)("desktop")
      },
      center: {
        list: _const.boolList,
        transform: (0, _transform.boolProp)("centered")
      },
      multiline: {
        list: _const.boolList,
        transform: (0, _transform.boolProp)("mutliline")
      },
      gap: {
        list: gapList
      }
    });
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.Columns = Columns;
Columns.propTypes = {
  className: _props.classNamePropType,
  mobile: _propTypes.default.bool,
  desktopOnly: _propTypes.default.bool,
  gap: _propTypes.default.oneOf(gapList),
  multiline: _propTypes.default.bool,
  center: _propTypes.default.bool,
  children: _propTypes.default.node
};
/** PropType for a single size value */

const columnSizePropTypes = _propTypes.default.oneOf([...Object.keys(fractionSizeList), ...Object.values(fractionSizeList), 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
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


class Column extends _react.default.Component {
  render() {
    const classes = ["column"];
    (0, _modifier.bringAll)(classes, this.props);
    (0, _class.addClassesWithViewportSuffix)(classes, this.props.size, value => columnSizeToClassName(value, false));
    (0, _class.addClassesWithViewportSuffix)(classes, this.props.offset, value => columnSizeToClassName(value, true));
    (0, _class.addClassesWithViewportSuffix)(classes, this.props.narrow, () => "is-narrow");
    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.Column = Column;
Column.propTypes = {
  className: _props.classNamePropType,
  ..._props.allModifiersPropsList,
  colSize: (0, _props.viewportPrefixablePropType)(columnSizePropTypes),
  colOffset: (0, _props.viewportPrefixablePropType)(columnSizePropTypes),
  narrow: (0, _props.viewportPrefixablePropType)(_propTypes.default.bool),
  children: _propTypes.default.node
};
var _default = {
  Columns,
  Column
};
exports.default = _default;
//# sourceMappingURL=column.js.map
