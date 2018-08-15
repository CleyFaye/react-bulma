/*eslint-env commonjs */
import React from "react";
import PropTypes from "prop-types";

import {getDummyName} from "./utils";

/**
 * Props:
 * - type (default to "text")
 * - vertical (default to false)
 * - label
 * - placeholder
 * - propName: Name of the property referenced by the field. Can be different
 *   from name (to prevent field from behing submitted in a form)
 * - name
 * - context
 * - static (default to false)
 * - value*: updated using context.state[propName]
 * - loading*: updated using context.state["loading"]
 * - readonly*: updated using context.state["readonly"]
 * - addons
 *
 * Values marked with a star are replaced by value from context if applicable.
 */
export class Input extends React.Component {
  constructor(props) {
    super(props);
    this._dummyName = getDummyName();
  }

  getPropName() {
    return (this.props.propName
      || this.props.name
      || this._dummyName);
  }

  handleChange(newValue) {
    this.props.context.setState({[this.getPropName()]: newValue});
  }

  render() {
    // Default prop values
    const type = this.props.type || "text";
    // Get effective prop name
    const propName = this.getPropName();
    // Grab properties from context
    let value = this.props.value;
    let loading = this.props.loading;
    let readonly = this.props.readonly;
    let changeHandler = undefined;
    if (this.props.context) {
      value = this.props.context.state[propName];
      loading |= this.props.context.state["loading"];
      readonly |= this.props.context.state["readonly"];
      changeHandler = e => this.handleChange(e.target.value);
    }
    if (loading) {
      readonly = true;
    }
    // Build class lists
    const fieldClasses = this.props.vertical
      ? ["field"]
      : ["field", "is-horizontal"];
    const inputClasses = ["input"];
    if (this.props.static) {
      inputClasses.push("is-static");
    }
    const controlClasses = ["control"];
    if (loading) {
      controlClasses.push("is-loading");
    }
    const inputFieldClasses = ["field"];
    if (this.props.addons) {
      inputFieldClasses.push("has-addons");
    }
    // Handle label
    let labelElem = null;
    let idName;
    if (this.props.label) {
      idName = `id_${propName}`;
      labelElem = <div className="field-label is-normal">
        <label
          className="label"
          htmlFor={idName}>{this.props.label}</label>
      </div>;
    }
    // Render
    return <div className={fieldClasses.join(" ")}>
      {labelElem}
      <div className="field-body">
        <div className={inputFieldClasses.join(" ")}>
          <p className={controlClasses.join(" ")}>
            <input 
              id={idName}
              className={inputClasses.join(" ")}
              type={type}
              placeholder={this.props.placeholder}
              value={value} 
              readOnly={readonly}
              onChange={changeHandler} />
            {this.props.addons}
          </p>
        </div>
      </div>
    </div>;
  }
}
Input.propTypes = {
  type: PropTypes.string,
  vertical: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  propName: PropTypes.string,
  name: PropTypes.string,
  context: PropTypes.object,
  static: PropTypes.bool,
  value: PropTypes.any,
  loading: PropTypes.bool,
  readonly: PropTypes.bool,
  addons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
