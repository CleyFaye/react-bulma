import React from "react";
import PropTypes from "prop-types";

import {classString} from "../utils/class";
import {bringAll} from "../utils/modifier";
import {classNamePropType} from "../utils/props";
import {allModifiersPropList} from "../utils/props";
import {renderChildrenWithProps} from "../utils/children";

/**
 * Props:
 * - className
 * - help(string): help text
 * - addons(bool): link together multiple controls (input/dropdown/button)
 * - group(bool): group controls together. Predates addons.
 * - multiline(bool): if group should span on multiple lines
 * - position("left", "center", "right"): addons/group bundle position (default
 * to left)
 * - horizontal(bool): display label and control on the same line
 * - All bulma modifiers
 * 
 * @note
 * Using horizontal field require wrapping the label and content respectively
 * in Field.Label and Field.Body
 */
export default class Field extends React.Component {
  /** Add the position class for the specified bundle type */
  _addPosition(classes, bundleType) {
    switch (this.props.position) {
    case "center": classes.push(`has-${bundleType}-centered`); break;
    case "right": classes.push(`has-${bundleType}-right`); break;
    }
  }

  _renderChildren() {
    return renderChildrenWithProps(
      this.props, 
      {
        size: true,
      });
  }

  render() {
    const classes = ["field"];
    bringAll(classes, this.props);
    if (this.props.horizontal) {
      classes.push("is-horizontal");
    }
    if (this.props.group) {
      classes.push("is-grouped");
      this._addPosition(classes, "grouped");
      if (this.props.multiline) {
        classes.push("is-grouped-multiline");
      }
    } else if (this.props.addons) {
      classes.push("has-addons");
      this._addPosition(classes, "addons");
    }
    const helpElement = this.props.help
      ? <p className="help">{this.props.help}</p>
      : undefined;
    return <div className={classString(classes, this.props.className)}>
      {this._renderChildren()}
      {helpElement}
    </div>;
  }
}
Field.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
  help: PropTypes.string,
  addons: PropTypes.bool,
  group:PropTypes.bool,
  horizontal: PropTypes.bool,
  multiline: PropTypes.bool,
  position: PropTypes.oneOf(["left", "center", "right"]),
  ...allModifiersPropList,
};

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
class Label extends React.Component {
  _renderChildren() {
    return renderChildrenWithProps(
      this.props, 
      {
        size: true,
      });
  }

  render() {
    const classes = ["field-label"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      {this._renderChildren()}
    </div>;
  }
}
Label.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
  ...allModifiersPropList,
};
Field.Label = Label;

/**
 * Props:
 * - className
 * - All Bulma modifiers
 */
class Body extends React.Component {
  _renderChildren() {
    return renderChildrenWithProps(
      this.props, 
      {
        size: true,
      });
  }

  render() {
    const classes = ["field-body"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      <Field>
        {this._renderChildren()}
      </Field>
    </div>;
  }
}
Body.propTypes = {
  className: classNamePropType,
  children: PropTypes.node,
  ...allModifiersPropList,
};
Field.Body = Body;