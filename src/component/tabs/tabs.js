import React from "react";
import PropTypes from "prop-types";

import {classNamePropType} from "../../utils/props.js";
import clsx from "clsx";

/**
 * Basic tabs element.
 * To implement a more complete view that handle changing tabs, use View
 *
 * Props:
 * - className
 * - activeId
 * - onTabClick: function(newTab:number)
 *
 * @example
 * @begincode
 * <Tabs active={1}>
 *   <Tab>Element 0</Tab>
 *   <Tab>Element 1</Tab>
 *   <Tab>Element 2</Tab>
 * </Tabs>
 * @endcode
 */
export default class Tabs extends React.Component {
  handleTabClick(tabId) {
    if (this.props.onTabClick) {
      this.props.onTabClick(tabId);
    }
  }

  render() {
    const classes = ["tabs"];
    const childArray = React.Children.toArray(this.props.children);
    return <div className={clsx(classes, this.props.className)}>
      <ul>
        {childArray.map((child, activeTab) => {
          if (this.props.tabViewRef
            && this.props.tabViewRef.state.tabHidden[activeTab]) {
            return null;
          }
          const tabId = activeTab;
          const newProps = {
            ...child.props,
            active: activeTab === this.props.activeId,
            onClick: () => this.handleTabClick(tabId),
          };
          return React.cloneElement(child, newProps);
        })}
      </ul>
    </div>;
  }
}
Tabs.propTypes = {
  className: classNamePropType,
  activeId: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  tabViewRef: PropTypes.object,
  onTabClick: PropTypes.func,
};
Tabs.defaultProps = {
  className: undefined,
  tabViewRef: undefined,
  onTabClick: undefined,
};
Tabs.displayName = "Tabs";
