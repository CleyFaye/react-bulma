"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textWeightList = exports.capitalizationList = exports.alignmentList = exports.responsiveHelperList = exports.viewportList = exports.breakpointList = exports.boolList = exports.sizeList = exports.fullColorList = exports.colorList = void 0;

/** List of available color names */
const colorList = ["primary", "link", "info", "success", "warning", "danger"];
/** List of available color including shades of grey */

exports.colorList = colorList;
const fullColorList = [...colorList, "white", "black", "light", "dark", "black-bis", "black-ter", "grey-darker", "grey-dark", "grey", "grey-light", "grey-lighter", "white-ter", "white-bis"];
/** List of available size modifiers */

exports.fullColorList = fullColorList;
const sizeList = ["small", "medium", "large"];
/** List of possible boolean values */

exports.sizeList = sizeList;
const boolList = [true, false];
exports.boolList = boolList;
const breakpointList = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
  widescreen: "widescreen",
  fullhd: "fullhd"
};
/** List of possible viewport breakpoints */

exports.breakpointList = breakpointList;
const viewportList = { ...breakpointList,
  tabletOnly: "tablet-only",
  desktopOnly: "desktop-only",
  widescreenOnly: "widescreen-only",
  touch: "touch"
};
/** List of possible responsive helpers */

exports.viewportList = viewportList;
const responsiveHelperList = {
  block: "block",
  flex: "flex",
  inline: "inline",
  inlineBlock: "inline-block",
  inlineFlex: "inline-flex",
  hidden: "hidden"
};
/** List of possible alignment values */

exports.responsiveHelperList = responsiveHelperList;
const alignmentList = ["centered", "justified", "left", "right"];
/** List of possible capitalization text transformation */

exports.alignmentList = alignmentList;
const capitalizationList = ["capitalized", "lowercase", "uppercase"];
/** List of possible text weight */

exports.capitalizationList = capitalizationList;
const textWeightList = ["light", "normal", "semibold", "bold"];
exports.textWeightList = textWeightList;
//# sourceMappingURL=const.js.map
