import React from "react";
import PropTypes from "prop-types";

import {commonModifiers} from "../utils";

/**
 * Props:
 * - className
 * - width: the width of the tile (from the 12 columns available)
 * - vertical: if the child tiles must be aligned vertically
 * - _ancestor: private props
 * - _child: private props
 *
 * Supports children
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
export class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      _parent: false,
    }, this.state || {});
  }

  componentDidMount() {
    React.Children.forEach(this.props.children, children => {
      if (children.type === Content) {
        this.setState({_parent: true});
      }
    });
  }

  render() {
    const classes = ["tile"];
    commonModifiers(this.props, classes);
    if (this.props._ancestor) {
      classes.push("is-ancestor");
    }
    if (this.props._child) {
      classes.push("is-child");
    }
    if (this.props.vertical) {
      classes.push("is-vertical");
    }
    if (this.state._parent) {
      classes.push("is-parent");
    }
    return <div className={classes}>
      {this.props.children}
    </div>;
  }
}
Tile.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  vertical: PropTypes.bool,
  _ancestor: PropTypes.bool,
  _child: PropTypes.bool,
  children: PropTypes.node,
};

class Ancestor extends Tile {
  constructor(props) {
    props._ancestor = true;
    super(props);
  }
}
Tile.Ancestor = Ancestor;

class Content extends Tile {
  constructor(props) {
    props._child = true;
    super(props);
  }
}
Tile.Content = Content;
