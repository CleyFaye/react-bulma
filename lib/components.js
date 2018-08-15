/*eslint-env commonjs */
import React from "react";
import PropTypes from "prop-types";

/**
 * Props:
 * - start
 * - current
 * - end
 * - maxVisible: max number of visible buttons
 * - onSelect: callback that receive the selected page
 */
export class Pagination extends React.Component {
  handleClick(pageId) {
    if (this.props.onSelect) {
      this.props.onSelect(pageId);
    }
  }

  render() {
    const maxVisible = this.props.maxVisible || 5;
    let buttonStart = parseInt(
      this.props.current - (maxVisible - 2 / 2));
    let buttonEnd = parseInt(
      this.props.current + (maxVisible - 2 / 2));
    if (buttonStart < this.props.start) {
      buttonStart = this.props.start;
    }
    if (buttonEnd > this.props.end) {
      buttonEnd = this.props.end;
    }
    let leftSection;
    let leftEllipsis;
    let middleSection = [];
    let rightEllipsis;
    let rightSection;
    let buttonSection;
    if (buttonStart == this.props.start) {
      leftSection = "";
      leftEllipsis = "";
    } else {
      const className = (this.props.current == this.props.start)
        ? "pagination-link is-current"
        : "pagination-link";

      leftSection = <li>
        <a
          className={className}
          onClick={() => this.handleClick(this.props.start)}>{this.props.start}</a>
      </li>;
      leftEllipsis = (buttonStart != this.props.start + 1)
        ? <li><span className="pagination-ellipsis">&hellip;</span></li>
        : "";
    }
    if (buttonEnd == this.props.end) {
      rightSection = "";
      rightEllipsis = "";
    } else {
      const className = (this.props.current == this.props.end)
        ? "pagination-link is-current"
        : "pagination-link";
      rightSection = <li>
        <a
          className={className}
          onClick={() => this.handleClick(this.props.end)}>{this.props.end}</a>
      </li>;
      rightEllipsis = (buttonEnd != this.props.end - 1)
        ? <li><span className="pagination-ellipsis">&hellip;</span></li>
        : "";
    }
    for (let i = buttonStart; i <= buttonEnd; ++i) {
      const className = (this.props.current == i)
        ? "pagination-link is-current"
        : "pagination-link";
      middleSection.push(<li key={i}>
        <a
          className={className}
          onClick={() => this.handleClick(i)}>{i}</a>
      </li>);
    }
    return <nav
      className="pagination"
      role="navigation">
      {buttonSection}
      <ul className="pagination-list">
        {leftSection}{leftEllipsis}
        {middleSection}
        {rightEllipsis}{rightSection}
      </ul>
    </nav>;
  }
}
Pagination.propTypes = {
  start: PropTypes.number,
  current: PropTypes.number,
  end: PropTypes.number,
  maxVisible: PropTypes.number,
  onSelect: PropTypes.func,
};


/** Base navbar.
 *
 * Props:
 * - brandItems: elements always visible
 * - leftItems: elements on the left
 * - rightItems: elements on the right
 * - transparent
 *
 * All elements are expected to be NavbarItem
 */
export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      burgerOpen: false,
    }, this.state || {});
  }

  burgerClick() {
    this.setState({burgerOpen: !this.state.burgerOpen});
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

/** A single navbar element.
 *
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
export class NavbarItem extends React.Component {
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

