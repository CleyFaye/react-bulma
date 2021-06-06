/* eslint-disable no-magic-numbers */
import React from "react";

import TileBase from "./tilebase.js";
import Content from "./content.js";

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
 * <Ancestor>
 *   <Tile>
 *     <Content>
 *       <div>Hello</div>
 *     </Content>
 *   </Tile>
 * </Ancestor>
 * @endcode
 */
export default class Tile extends TileBase {
  constructor(props) {
    super(props);
    this.state = {_parent: false, ...this.state};
  }

  componentDidMount() {
    React.Children.forEach(this.props.children, children => {
      if (children.type === Content) {
        this.setState({_parent: true});
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getBaseClasses() {
    return ["tile"];
  }
}
Tile.propTypes = TileBase.propTypes;
Tile.defaultProps = TileBase.defaultProps;
Tile.displayName = "Tile";
