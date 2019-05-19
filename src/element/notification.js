import React from "react";
import PropTypes from "prop-types";

import Component from "../utils/component";
import {classString} from "../utils/class";
import {bringAll} from "../utils/modifier";
import {allModifiersPropList} from "../utils/props";
import {classNamePropType} from "../utils/props";

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
    this.prepareState({
      closed: this.props.initiallyClosed,
    });
    this.selfBind(this.close);
  }

  /** Close the notification.
   *
   * Closed notification is invisible and does not occupy space.
   */
  close() {
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
        className="delete"
        onClick={this.close} />;
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
  children: PropTypes.node,
  closeable: PropTypes.bool,
  onClose: PropTypes.func,
  initiallyClosed: PropTypes.bool,
  ...allModifiersPropList,
};
