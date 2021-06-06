import React from "react";
import PropTypes from "prop-types";

import controlledInputMixin, {withCtx} from "../../utils/controlledinput.js";
import {bringAll} from "../../utils/modifier.js";
import {
  classNamePropType,
  allModifiersPropList,
} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - className
 * - readOnly*
 * - value*
 * - onChange
 * - disabled
 * - stateName: Name of the property referenced in stateObj.state. If not
 * provided will default to name.
 * - name: HTML name property for the form
 * - stateObj: object with both state and setState to handle updates
 * - multiple
 * - All bulma modifiers
 *
 * See form.Input for stateObj behavior.
 *
 * @note
 * Use Select.Option for options
 */
class Select extends React.Component {
  constructor(props) {
    super(props);
    controlledInputMixin(
      this,
      ev => {
        const elem = ev.target;
        if (this.props.multiple) {
          const values = Array.from(elem.selectedOptions).map(opt => opt.value);
          return values;
        }
        return elem.value;
      },
    );
  }

  render() {
    const classes = ["select"];
    bringAll(classes, this.props);
    return <div
      readOnly={this.isReadOnly()}
      className={clsx(classes, this.props.className)}
    >
      <select
        multiple={this.props.multiple}
        disabled={this.props.disabled}
        value={this.props.value}
        onChange={this.handleChange}
      >
        {this.props.children}
      </select>
    </div>;
  }
}
Select.propTypes = {
  className: classNamePropType,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  ...allModifiersPropList,
};
Select.defaultProps = {
  className: undefined,
  multiple: false,
  disabled: false,
};
Select.displayName = "Select";

export default withCtx(Select);
