import React from "react";
import PropTypes from "prop-types";

import Component from "../utils/component";

// TODO Use Navbar.Item instead of NavbarItem

/**
 * Props:
 * - brandItems: elements always visible
 * - leftItems: elements on the left
 * - rightItems: elements on the right
 * - transparent
 *
 * All elements are expected to be NavbarItem
 */
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.prepareState({
      burgerOpen: false,
    });
  }

  burgerClick() {
    this.updateState(oldState => ({burgerOpen: !oldState.burgerOpen}));
  }

  render() {
    let burgerClass = "navbar-burger";
    let menuClass = "navbar-menu";
    if (this.state.burgerOpen) {
      burgerClass += " is-active";
      menuClass += " is-active";
    }
    const navbarClass = this.props.transparent
      ? "navbar is-transparent"
      : "navbar";
    return <nav className={navbarClass} role="navigation">
      <div className="navbar-brand">
        {this.props.brandItems}
        <a
          role="button"
          className={burgerClass}
          onClick={() => this.burgerClick()}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className={menuClass}>
        <div className="navbar-start">
          {this.props.leftItems}
        </div>
        <div className="navbar-end">
          {this.props.rightItems}
        </div>
      </div>
    </nav>;
  }
}
Navbar.propTypes = {
  brandItems: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  leftItems: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  rightItems: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  transparent: PropTypes.bool,
};

/**
 * Props:
 * - url
 * - logoURL
 * - logoWidth
 * - logoHeight
 * - label
 * - dropdownItems
 *
 * Not all props are required at the same time.
 * In particular, it makes no sense to have both dropdownItems and url.
 */
class NavbarItem extends React.Component {
  render() {
    const imageElem = this.props.logoURL
      ? <img
        src={this.props.logoURL}
        width={this.props.logoWidth}
        height={this.props.logoHeight} />
      : null;
    if (this.props.dropdownItems) {
      return <div className="navbar-item has-dropdown">
        <a className="navbar-link">
          {this.props.label}
          {imageElem}
          {this.props.children}
        </a>
        <div className="navbar-dropdown">
          {this.props.dropdownItems}
        </div>
      </div>;
    }
    if (this.props.children) {
      return <div className="navbar-item">
        {this.props.label}
        {imageElem}
        {this.props.children}
      </div>;
    }
    return <a className="navbar-item" href={this.props.url}>
      {this.props.label}
      {imageElem}
      {this.props.children}
    </a>;
  }
}
NavbarItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  dropdownItems: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  url: PropTypes.string,
  logoURL: PropTypes.string,
  logoWidth: PropTypes.number,
  logoHeight: PropTypes.number,
  label: PropTypes.string,
};
Navbar.Item = NavbarItem;
