import React from "react";
import PropTypes from "prop-types";

import controlledInputMixin, {withCtx} from "../utils/controlledinput.js";
import {bringAll} from "../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 * - rows
 * - placeholder
 * - readOnly*
 * - value*
 * - onChange
 * - stateName: Name of the property referenced in stateObj.state. If not
 * provided will default to name.
 * - name: HTML name property for the form
 * - stateObj: object with both state and setState to handle updates
 * - All bulma modifiers
 *
 * See form.Input for stateObj behavior.
 */
class Textarea extends React.Component {
  constructor(props) {
    super(props);
    controlledInputMixin(
      this,
      ev => ev.target.value,
    );
  }

  render() {
    const classes = ["textarea"];
    bringAll(classes, this.props);
    return <textarea
      rows={this.props.rows}
      placeholder={this.props.placeholder}
      onChange={this.handleChange}
      onKeyUp={this.handleChange}
      readOnly={this.isReadOnly()}
      value={this.props.value}
      className={clsx(classes, this.props.className)}
    />;
  }
}
Textarea.propTypes = {
  className: classNamePropType,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  ...allModifiersPropList,
};
Textarea.defaultProps = {
  className: undefined,
  rows: undefined,
  placeholder: undefined,
  value: "",
};
Textarea.displayName = "Textarea";

export default withCtx(Textarea);
