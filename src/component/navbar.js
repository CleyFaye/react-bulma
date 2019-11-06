import React from "react";
import PropTypes from "prop-types";

import Component from "../utils/component";

/**
 * Props:
 * - transparent
 *
 * All elements are expected to be Navbar.Brand, Navbar.Left or Navbar.Right.
 */
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.prepareState({
      burgerOpen: false,
    });
    this.burgerClick = this.burgerClick.bind(this);
    this.childClicked = this.childClicked.bind(this);
  }

  burgerClick() {
    this.setState(oldState => ({burgerOpen: !oldState.burgerOpen}));
  }

  childClicked() {
    if (this.props.autoClose) {
      this.setState({burgerOpen: false});
    }
  }

  render() {
    const children = React.Children.toArray(this.props.children);
    if (children.length > 3) {
      throw new Error("Navbar must have at most three children:"
        + " Brand, Left, Right");
    }
    let brandElem = null;
    let leftElem = null;
    let rightElem = null;
    children.forEach(child => {
      if (child.type.name.endsWith("Brand")) {
        if (brandElem) {
          throw new Error("Only one brand element is accepted");
        }
        brandElem = child;
      }
      if (child.type.name.endsWith("Left")) {
        if (leftElem) {
          throw new Error("Only one left element is accepted");
        }
        leftElem = React.cloneElement(
          child,
          {
            onMenuClick: this.childClicked,
          }
        );
      }
      if (child.type.name.endsWith("Right")) {
        if (rightElem) {
          throw new Error("Only one right element is accepted");
        }
        rightElem = React.cloneElement(
          child,
          {
            onMenuClick: this.childClicked,
          }
        );
      }
    });
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
      {brandElem
        ? React.cloneElement(
          brandElem,
          {
            burgerClass,
            onClick: this.burgerClick,
          })
        : null}
      <div className={menuClass}>
        {leftElem}
        {rightElem}
      </div>
    </nav>;
  }
}
Navbar.propTypes = {
  transparent: PropTypes.bool,
  children: PropTypes.node,
  autoClose: PropTypes.bool,
};

class Brand extends React.Component {
  render() {
    return <div className="navbar-brand">
      {this.props.children}
      <a
        role="button"
        className={this.props.burgerClass}
        onClick={this.props.onClick}>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>;
  }
}
Brand.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  burgerClass: PropTypes.string,
};
Navbar.Brand = Brand;

class Left extends React.Component {
  renderChilds() {
    return React.Children.toArray(this.props.children)
      .map(child => React.cloneElement(
        child,
        {
          onMenuClick: this.props.onMenuClick,
        }
      ));
  }

  render() {
    return <div className="navbar-start">
      {this.renderChilds()}
    </div>;
  }
}
Left.propTypes = {
  children: PropTypes.node,
  onMenuClick: PropTypes.func,
};
Navbar.Left = Left;

class Right extends React.Component {
  renderChilds() {
    return React.Children.toArray(this.props.children)
      .map(child => React.cloneElement(
        child,
        {
          onMenuClick: this.props.onMenuClick,
        }
      ));
  }

  render() {
    return <div className="navbar-end">
      {this.renderChilds()}
    </div>;
  }
}
Right.propTypes = {
  children: PropTypes.node,
  onMenuClick: PropTypes.func,
};
Navbar.Right = Right;

/**
 */
class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foldOpen: false,
    };
    this._foldableRef = React.createRef();
    this.handleFold = this.handleFold.bind(this);
  }

  handleFold() {
    this.setState(oldState => ({foldOpen: !oldState.foldOpen}));
  }

  handleClick() {
    if (this.props.onMenuClick) {
      this.props.onMenuClick();
    }
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  renderChild(child) {
    return React.cloneElement(
      child,
      {
        onMenuClick: this.props.onMenuClick,
      }
    );
  }

  renderFoldable(childrenArray) {
    const linkClasses = ["navbar-link"];
    const elemClasses = ["navbar-dropdown"];
    if (this.state.foldOpen) {
      linkClasses.push("is-active");
    } else {
      elemClasses.push("is-hidden");
    }
    return <div className="navbar-item has-dropdown is-hoverable">
      <a className={linkClasses.join(" ")} onClick={this.handleFold}>
        {childrenArray[0]}
      </a>
      <div className={elemClasses.join(" ")} ref={this._foldableRef}>
        {childrenArray.slice(1).map(child => this.renderChild(child))}
      </div>
    </div>;
  }

  render() {
    const childrenArray = React.Children.toArray(this.props.children);
    if (childrenArray.length == 0) {
      throw new Error("NavbarItem missing children");
    }
    const haveDropdown = childrenArray.length > 1;
    if (haveDropdown) {
      if (this.props.foldable) {
        return this.renderFoldable(childrenArray);
      }
      return <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          {childrenArray[0]}
        </a>
        <div className="navbar-dropdown">
          {childrenArray.slice(1)}
        </div>
      </div>;
    }
    return React.cloneElement(
      childrenArray[0],
      {
        onClick: this.handleClick.bind(this),
        className: childrenArray[0].props.className
          ? (childrenArray[0].props.className + " navbar-item")
          : "navbar-item",
      });
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
  onClick: PropTypes.func,
  onMenuClick: PropTypes.func,
  foldable: PropTypes.bool,
};
Navbar.Item = NavbarItem;
