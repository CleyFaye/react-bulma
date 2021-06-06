import React from "react";
import PropTypes from "prop-types";

import {bringAll} from "../utils/modifier.js";
import {
  allModifiersPropList,
  classNamePropType,
} from "../utils/props.js";
import clsx from "clsx";

/**
 * Props:
 * - closeable (bool): if the notification display a close button
 * - initiallyClosed (bool)
 * - onClose (func): called when the notification is closed. Can return false
 *   to prevent the notification from closing.
 * - All Bulma modifiers
 */
export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {closed: this.props.initiallyClosed};
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
    this.setState({closed: true});
  }

  /** Open a notification.
   *
   * Closed notification is invisible and does not occupy space.
   */
  open() {
    this.setState({closed: false});
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
    return <div className={clsx(classes, this.props.className)}>
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
