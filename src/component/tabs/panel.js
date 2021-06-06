import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import {classString} from "../../utils/class.js";

/**
 * Props:
 * - className
 * - tabClassName
 * - hidden: control if the tab should be visible in a tab list
 * - title: name of the tab
 */
export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this._updateTabViewer();
  }

  componentDidUpdate(prevProps) {
    if (!this.props.tabViewRef) {
      return;
    }
    if (prevProps.hidden !== this.props.hidden
      || prevProps.title !== this.props.title) {
      this._updateTabViewer();
    }
  }

  _updateTabViewer() {
    if (!this.props.tabViewRef) {
      return;
    }
    this.props.tabViewRef.setState(
      oldState => {
        const tabHidden = oldState.tabHidden.slice();
        const tabTitles = oldState.tabTitles.slice();
        tabHidden[this.props.tabId] = this.props.hidden;
        tabTitles[this.props.tabId] = this.props.title;
        return {
          tabHidden,
          tabTitles,
        };
      },
    );
  }

  _shouldrender() {
    return (!this.props.tabViewRef
      || this.props.tabViewRef.state.activeTab === this.props.tabId);
  }

  render() {
    if (!this._shouldrender()) {
      return null;
    }
    const classes = ["tabs-panel"];
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Panel.propTypes = {
  className: classNamePropType,
  // eslint-disable-next-line react/no-unused-prop-types
  tabClassName: classNamePropType,
  children: PropTypes.node.isRequired,
  hidden: PropTypes.bool,
  title: PropTypes.string,
  tabId: PropTypes.number,
  tabViewRef: PropTypes.object,
};
Panel.defaultProps = {
  className: undefined,
  tabClassName: undefined,
  hidden: false,
  title: undefined,
  tabId: undefined,
  tabViewRef: undefined,
};
Panel.displayName = "Panel";
