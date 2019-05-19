"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class = require("../utils/class");

var _const = require("../utils/const");

var _transform = require("../utils/transform");

var _props = require("../utils/props");

var _modifier = require("../utils/modifier");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

class Tile extends _react.default.Component {
  constructor(props, isAncestor, isChild) {
    super(props);
    this.state = Object.assign({
      _parent: false
    }, this.state || {});
    this._isAncestor = isAncestor;
    this._isChild = isChild;
  }

  componentDidMount() {
    _react.default.Children.forEach(this.props.children, children => {
      if (children.type === Content) {
        this.setState({
          _parent: true
        });
      }
    });
  }

  getBaseClasses() {
    return ["tile"];
  }

  render() {
    const classes = this.getBaseClasses();
    (0, _class.addClassesFromOptions)(classes, this.props, undefined, {
      vertical: {
        list: _const.boolList,
        transform: (0, _transform.boolProp)("vertical")
      },
      width: {
        list: widthList
      }
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

    return _react.default.createElement("div", {
      className: (0, _class.classString)(classes, this.props.className)
    }, this.props.children);
  }

}

exports.default = Tile;
Tile.propTypes = {
  className: _props.classNamePropType,
  width: _propTypes.default.oneOf(widthList),
  vertical: _propTypes.default.bool,
  children: _propTypes.default.node
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
    (0, _modifier.bringAll)(classes, this.props);
  }

}

Content.propTypes = { ...Tile.propTypes,
  ..._props.allModifiersPropList
};
Tile.Content = Content;
//# sourceMappingURL=tile.js.map
