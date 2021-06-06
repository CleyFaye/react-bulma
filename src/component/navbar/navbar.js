/*
 global
 document: false
 */
import React from "react";
import PropTypes from "prop-types";

import Component from "../../utils/component.js";
import Brand from "./brand.js";
import Left from "./left.js";
import Right from "./right.js";

/**
 * Props:
 * - transparent
 *
 * All elements are expected to be Navbar.Brand, Navbar.Left or Navbar.Right.
 */
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.prepareState({burgerOpen: false});
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

  getChildElements(burgerClass) {
    const MAX_CHILD_COUNT = 3;
    const children = React.Children.toArray(this.props.children);
    if (children.length > MAX_CHILD_COUNT) {
      throw new Error("Navbar must have at most three children:"
        + " Brand, Left, Right");
    }
    let brandElem = null;
    let leftElem = null;
    let rightElem = null;
    children.forEach(child => {
      if (child.type === Brand) {
        if (brandElem) {
          throw new Error("Only one brand element is accepted");
        }
        brandElem = React.cloneElement(
          child,
          {
            burgerClass,
            onClick: this.burgerClick,
          },
        );
      }
      if (child.type === Left) {
        if (leftElem) {
          throw new Error("Only one left element is accepted");
        }
        leftElem = React.cloneElement(
          child,
          {onMenuClick: this.childClicked},
        );
      }
      if (child.type === Right) {
        if (rightElem) {
          throw new Error("Only one right element is accepted");
        }
        rightElem = React.cloneElement(
          child,
          {onMenuClick: this.childClicked},
        );
      }
    });
    return {
      leftElem,
      brandElem,
      rightElem,
    };
  }

  prepareClasses() {
    let burgerClass = "navbar-burger";
    let menuClass = "navbar-menu";
    if (this.state.burgerOpen) {
      burgerClass += " is-active";
      menuClass += " is-active";
    }
    const navbarClass = ["navbar"];
    if (this.props.transparent) {
      navbarClass.push("is-transparent");
    }
    if (this.props.fixed) {
      navbarClass.push("is-fixed-top");
      const body = document.getElementsByTagName("body")[0];
      const bodyClassesStr = body.className;
      const bodyClasses = bodyClassesStr.split(" ");
      if (!bodyClasses.includes("has-navbar-fixed-top")
        // TODO automatically add it and remove it
        // eslint-disable-next-line no-console
        && console && console.warn) {
        console.warn("When using a fixed navbar the body element should have"
          + " the 'has-navbar-fixed-top' class");
      }
    }
    return {
      burgerClass,
      menuClass,
      navbarClass,
    };
  }

  render() {
    const {burgerClass, menuClass, navbarClass} = this.prepareClasses();
    const {brandElem, leftElem, rightElem} = this.getChildElements(burgerClass);
    return <nav className={navbarClass.join(" ")} role="navigation">
      {brandElem}
      <div className={menuClass}>
        {leftElem}
        {rightElem}
      </div>
    </nav>;
  }
}
Navbar.propTypes = {
  transparent: PropTypes.bool,
  children: PropTypes.node.isRequired,
  autoClose: PropTypes.bool,
  fixed: PropTypes.bool,
};
Navbar.defaultProps = {
  transparent: false,
  autoClose: false,
  fixed: false,
};
Navbar.displayName = "Navbar";
