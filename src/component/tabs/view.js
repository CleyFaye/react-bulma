import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import Tab from "./tab.js";
import Tabs from "./tabs.js";
import clsx from "clsx";

/** Render a tabular view.
 *
 * This component render a tab list at the top, and handle switching tabs.
 *
 * Props:
 * - className
 *
 * @example
 * @begincode
 * <View>
 *   <Panel title="Element 1">
 *     Some content
 *   </Panel>
 *   <Panel title="Element 2">
 *     Some content 2
 *   </Panel>
 * </View>
 * @endcode
 */
export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.initialTab,
      tabTitles: [],
      tabHidden: [],
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabId) {
    if (this.state.activeTab !== tabId) {
      this.setState({activeTab: tabId});
    }
  }

  render() {
    const childArray = React.Children.toArray(this.props.children);
    const tabs = childArray.map(
      (child, tabId) => <Tab
        // eslint-disable-next-line react/no-array-index-key
        key={tabId}
        tabId={tabId}
        className={child.props.tabClassName}
      >
        {this.state.tabTitles[tabId]}
      </Tab>,
    );
    const classes = ["tabs-view"];
    return <div className={clsx(classes, this.props.className)}>
      <Tabs
        activeId={this.state.activeTab}
        tabViewRef={this}
        onTabClick={this.handleTabClick}
      >
        {tabs}
      </Tabs>
      {childArray.map(
        (panel, tabId) => React.cloneElement(
          panel,
          {
            tabId,
            tabViewRef: this,
          },
        ),
      )}
    </div>;
  }
}
View.propTypes = {
  className: classNamePropType,
  initialTab: PropTypes.number,
  children: PropTypes.node.isRequired,
};
View.defaultProps = {
  className: undefined,
  initialTab: 0,
};
View.displayName = "View";
