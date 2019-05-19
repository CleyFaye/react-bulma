import React from "react";
import PropTypes from "prop-types";

import Component from "../utils/component";
import {classNamePropType} from "../utils/props";
import {allModifiersPropList} from "../utils/props";
import {classString} from "../utils/class";
import {bringAll} from "../utils/modifier";

/**
 * Basic tabs element.
 * To implement a more complete view that handle changing tabs, use Tabs.View
 *
 * Props:
 * - className
 * - activeId
 * - onTabClick: function(newTab:number)
 *
 * @example
 * @begincode
 * <Tabs active={1}>
 *   <Tabs.Tab>Element 0</Tabs.Tab>
 *   <Tabs.Tab>Element 1</Tabs.Tab>
 *   <Tabs.Tab>Element 2</Tabs.Tab>
 * </Tabs>
 * @endcode
 */
export default class Tabs extends Component {
  handleTabClick(tabId) {
    if (this.props.onTabClick) {
      this.props.onTabClick(tabId);
    }
  }

  render() {
    const classes = ["tabs"];
    const childArray = React.Children.toArray(this.props.children);
    return <div className={classString(classes, this.props.className)}>
      <ul>
        {childArray.map((child, activeTab) => {
          if (this.props.tabViewRef
            && this.props.tabViewRef.state.tabHidden[activeTab]) {
            return null;
          }
          const tabId = activeTab;
          let newProps = Object.assign({},
            child.props,
            {
              active: activeTab === this.props.activeId,
              onClick: () => this.handleTabClick(tabId),
            });
          return React.cloneElement(child, newProps);
        })}
      </ul>
    </div>;
  }
}
Tabs.propTypes = {
  className: classNamePropType,
  activeId: PropTypes.number,
  children: PropTypes.node,
  tabViewRef: PropTypes.object,
  onTabClick: PropTypes.func,
};

/**
 * Props:
 * - className
 * - active (automatically set by Tabs)
 * - onClick
 * - All Bulma modifiers
 */
class Tab extends Component {
  render() {
    const classes = [];
    // TODO use utils for that too?
    if (this.props.active) {
      classes.push("is-active");
    }
    bringAll(classes, this.props);
    return <li
      className={classString(classes, this.props.className)}
      onClick={this.props.onClick}>
      <a>
        {this.props.children}
      </a>
    </li>;
  }
}
Tab.propTypes = {
  className: classNamePropType,
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  ...allModifiersPropList,
};
Tabs.Tab = Tab;

/**
 * Props:
 * - className
 * - tabClassName
 * - hidden: control if the tab should be visible in a tab list
 * 
 * The first children will be used as the tab title
 */
class Panel extends Component {
  constructor(props) {
    super(props);
    this._updateTabViewer();
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
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (!this.props.tabViewRef) {
      return;
    }
    if (prevProps.hidden != this.props.hidden
      || prevProps.title != this.props.title) {
      this._updateTabViewer();
    }
  }

  _shouldrender() {
    return (!this.props.tabViewRef
      || this.props.tabViewRef.state.activeTab == this.props.tabId);
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
  tabClassName: classNamePropType,
  children: PropTypes.node,
  hidden: PropTypes.bool,
  title: PropTypes.string,
  tabId: PropTypes.number,
  tabViewRef: PropTypes.object,
};
Tabs.Panel = Panel;

/** Render a tabular view.
 *
 * This component render a tab list at the top, and handle switching tabs.
 *
 * Props:
 * - className
 *
 * @example
 * @begincode
 * <Tabs.View>
 *   <Tabs.Panel title="Element 1">
 *     Some content
 *   </Tabs.Panel>
 *   <Tabs.Panel title="Element 2">
 *     Some content 2
 *   </Tabs.Panel>
 * </Tabs.View>
 * @endcode
 */
class View extends Component {
  constructor(props) {
    super(props);
    this.prepareState({
      activeTab: this.props.initialTab,
      tabTitles: [],
      tabHidden: [],
    });
    this.selfBind(this.handleTabClick);
  }

  handleTabClick(tabId) {
    if (this.state.activeTab !== tabId) {
      this.updateState({activeTab: tabId});
    }
  }

  render() {
    const childArray = React.Children.toArray(this.props.children);
    const tabs = childArray.map(
      (child, tabId) => <Tabs.Tab
        key={tabId}
        tabId={tabId}
        className={child.props.tabClassName}>
        {this.state.tabTitles[tabId]}
      </Tabs.Tab>
    );
    const classes = ["tabs-view"];
    return <div className={classString(classes, this.props.className)}>
      <Tabs
        activeId={this.state.activeTab}
        tabViewRef={this}
        onTabClick={this.handleTabClick}>
        {tabs}
      </Tabs>
      {childArray.map(
        (panel, tabId) => React.cloneElement(
          panel,
          {
            tabId,
            tabViewRef: this,
          }
        )
      )}
    </div>;
  }
}
View.propTypes = {
  className: classNamePropType,
  initialTab: PropTypes.number,
  children: PropTypes.node,
};
Tabs.View = View;