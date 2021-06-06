import React from "react";
import PropTypes from "prop-types";

import Component from "../utils/component.js";
import {classString} from "../utils/class.js";
import {bringAll} from "../utils/modifier.js";
import {
  allModifiersPropList,
  classNamePropType,
} from "../utils/props.js";

/**
 * Props:
 * - closeable (bool): if the notification display a close button
 * - initiallyClosed (bool)
 * - onClose (func): called when the notification is closed. Can return false
 *   to prevent the notification from closing.
 * - All Bulma modifiers
 */
export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.prepareState({closed: this.props.initiallyClosed});
    this.handleClose = this.handleClose.bind(this);
  }

  /** Close the notification.
   *
   * Closed notification is invisible and does not occupy space.
   */
  handleClose() {
    if (this.props.onClose) {
      if (this.props.onClose() === false) {
        return;
      }
    }
    this.updateState({closed: true});
  }

  /** Open a notification.
   *
   * Closed notification is invisible and does not occupy space.
   */
  open() {
    this.updateState({closed: false});
  }

  _renderCloseButton() {
    if (this.props.closeable) {
      return <button
        type="button"
        className="delete"
        onClick={this.handleClose}
      />;
    }
    return null;
  }

  render() {
    if (this.state.closed) {
      return null;
    }
    const classes = ["notification"];
    bringAll(classes, this.props);
    return <div className={classString(classes, this.props.className)}>
      {this._renderCloseButton()}
      {this.props.children}
    </div>;
  }
}
Notification.propTypes = {
  className: classNamePropType,
  children: PropTypes.node.isRequired,
  closeable: PropTypes.bool,
  onClose: PropTypes.func,
  initiallyClosed: PropTypes.bool,
  ...allModifiersPropList,
};
Notification.defaultProps = {
  className: undefined,
  closeable: false,
  onClose: undefined,
  initiallyClosed: false,
};
Notification.displayName = "Notification";
