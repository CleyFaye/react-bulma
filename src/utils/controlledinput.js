import React from "react";
import PropTypes from "prop-types";
import stateContext from "@cley_faye/react-utils/lib/context/state.js";

const ControllerCtx = stateContext(
  "Controller",
  {controller: null},
);

export class Controller extends React.Component {
  constructor(props) {
    super(props);
    ControllerCtx.init(this, {controller: props.controller});
  }
}
Controller.propTypes = {controller: PropTypes.object.isRequired};
Controller.displayName = "Controller";

export const withCtx = ControllerCtx.withCtx;

/**
 * Add a `handleChange()` method to instance, updating the controller state appropriately.
 *
 * The controller state is provided through a `controller` prop, and the name of the value in the
 * state is provided in the `name` prop.
 *
 * The actual value to use is returned by the function passed as second argument, which must take
 * the event as input.
 *
 * It also adds a `isReadOnly()` function that determine if the component should be rendered
 * read only.
 *
 * If no controller is available, simply try to call a prop named `onChange` if provided.
 *
 * The controller can also be set using a prop named `ControllerCtx`, in which case it will be
 * taken from `ControllerCtx.controller`.
 */
export default (instance, valueGetter) => {
  const getController = () => instance.props.controller
      ?? instance.props.ControllerCtx?.controller;
  instance.handleChange = ev => {
    const controller = getController();
    const value = valueGetter(ev);
    if (controller) {
      controller.setState({[instance.props.name]: value});
    } else if (instance.props.onChange) {
      instance.props.onChange(value);
    }
  };
  instance.isReadOnly = () => {
    const controller = getController();
    const controllerROStatus = controller
      ? (
        controller.state.readonly
        || controller.state.loading
        || controller.props.readOnly
        || controller.props.loading
      )
      : false;
    const componentROStatus = instance.props.readOnly || instance.props.loading;
    return controllerROStatus || componentROStatus;
  };
};
