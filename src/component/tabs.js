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
    let activeTab = 0;
    return <div className={classString(classes, this.props.className)}>
      <ul>
        {React.Children.map(this.props.children, child => {
          const tabId = activeTab;
          let newProps = Object.assign({},
            child.props,
            {
              active: activeTab++ === this.props.activeId,
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
 * - title
 */
class Panel extends Component {
  render() {
    const classes = ["tabs-panel"];
    return <div className={classString(classes, this.props.className)}>
      {this.props.children}
    </div>;
  }
}
Panel.propTypes = {
  className: classNamePropType,
  tabClassName: classNamePropType,
  title: PropTypes.string,
  children: PropTypes.node,
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
    });
    this.selfBind(this.handleTabClick);
  }

  handleTabClick(tabId) {
    if (this.state.activeTab !== tabId) {
      this.updateState({activeTab: tabId});
    }
  }

  render() {
    let tabId = 0;
    const tabs = React.Children.map(this.props.children, child => <Tabs.Tab
      key={tabId++}
      className={child.props.tabClassName}>
      {child.props.title}
    </Tabs.Tab>);
    const classes = ["tabs-view"];
    return <div className={classString(classes, this.props.className)}>
      <Tabs activeId={this.state.activeTab} onTabClick={this.handleTabClick}>
        {tabs}
      </Tabs>
      {this.state.activeTab !== undefined
        ? this.props.children[this.state.activeTab]
        : null}
    </div>;
  }
}
View.propTypes = {
  className: classNamePropType,
  initialTab: PropTypes.number,
  children: PropTypes.node,
};
Tabs.View = View;