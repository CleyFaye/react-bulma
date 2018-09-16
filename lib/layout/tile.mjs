import React from "react";
import PropTypes from "prop-types";

import {
  classString,
  addClassesFromOptions,
} from "../utils/class";
import {
  boolList,
} from "../utils/const";
import {
  boolProp,
} from "../utils/transform";
import {
  classNamePropType,
  allModifiersPropList,
} from "../utils/props";
import {
  bringAll,
} from "../utils/modifier";

/** List of possible tile width */
const widthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/**
 * Props:
 * - className
 * - width: the width of the tile (from the 12 columns available)
 * - vertical: if the child tiles must be aligned vertically
 *
 * @note
 * To produce a proper Tile layout, you must have at least a depth of three
 * elements:
 * - A "top-level" tile (using Tile.Ancestor)
 * - An intermediate tile (using Tile)
 * - A "content" tile (using Tile.Content)
 *
 * Most basic usage:
 * @begincode
 * <Tile.Ancestor>
 *   <Tile>
 *     <Tile.Content>
 *       <div>Hello</div>
 *     </Tile.Content>
 *   </Tile>
 * </Tile.Ancestor>
 * @endcode
 */
export default class Tile extends React.Component {
  constructor(props, isAncestor, isChild) {
    super(props);
    this.state = Object.assign({
      _parent: false,
    }, this.state || {});
    this._isAncestor = isAncestor;
    this._isChild = isChild;
  }

  componentDidMount() {
    React.Children.forEach(this.props.children, children => {
      if (children.type === Content) {
        this.setState({_parent: true});
      }
    });
  }

  getBaseClasses() {
    return ["tile"];
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
      });
    if (this.state._parent) {
      classes.push("is-parent");
    }
    if (this._isAncestor) {
      classes.push("is-ancestor");
    }
    if (this._isChild) {
      classes.push("is-child");
    }
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Tile.propTypes = {
  className: classNamePropType,
  width: PropTypes.oneOf(widthList),
  vertical: PropTypes.bool,
  children: PropTypes.node,
};

class Ancestor extends Tile {
  constructor(props) {
    super(props, true);
  }
}
Tile.Ancestor = Ancestor;

/**
 * Props:
 * - All bulma modifiers
 */
class Content extends Tile {
  constructor(props) {
    super(props, false, true);
  }

  getBaseClasses() {
    const classes = super.getBaseClasses();
    bringAll(classes, this.props);
  }
}
Content.propTypes = {
  ...Tile.propTypes,
  ...allModifiersPropList,
};
Tile.Content = Content;