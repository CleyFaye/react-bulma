/** List of available color names */
export const colorList = [
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
];

/** List of available color including shades of grey */
export const fullColorList = [
  ...colorList,
  "white",
  "black",
  "light",
  "dark",
  "black-bis",
  "black-ter",
  "grey-darker",
  "grey-dark",
  "grey",
  "grey-light",
  "grey-lighter",
  "white-ter",
  "white-bis",
];

/** List of available size modifiers */
export const sizeList = [
  "small",
  "medium",
  "large",
];

/** List of possible boolean values */
export const boolList = [
  true,
  false,
];

export const breakpointList = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
  widescreen: "widescreen",
  fullhd: "fullhd",
};

/** List of possible viewport breakpoints */
export const viewportList = {
  ...breakpointList,
  tabletOnly: "tablet-only",
  desktopOnly: "desktop-only",
  widescreenOnly: "widescreen-only",
  touch: "touch",
};

/** List of possible responsive helpers */
export const responsiveHelperList = {
  block: "block",
  flex: "flex",
  inline: "inline",
  inlineBlock: "inline-block",
  inlineFlex: "inline-flex",
  hidden: "hidden",
};

/** List of possible alignment values */
export const alignmentList = [
  "centered",
  "justified",
  "left",
  "right",
];

/** List of possible capitalization text transformation */
export const capitalizationList = [
  "capitalized",
  "lowercase",
  "uppercase",
];

/** List of possible text weight */
export const textWeightList = [
  "light",
  "normal",
  "semibold",
  "bold",
];