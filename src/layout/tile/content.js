import {allModifiersPropList} from "../../utils/props.js";
import {bringAll} from "../../utils/modifier.js";
import TileBase from "./tilebase.js";

/**
 * Props:
 * - All bulma modifiers
 */
export default class Content extends TileBase {
  constructor(props) {
    super(props, false, true);
  }

  getBaseClasses() {
    const classes = super.getBaseClasses();
    bringAll(classes, this.props);
  }
}
Content.propTypes = {
  ...TileBase.propTypes,
  ...allModifiersPropList,
};
Content.defaultProps = TileBase.defaultProps;
Content.displayName = "Content";
