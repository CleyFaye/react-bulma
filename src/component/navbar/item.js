import React from "react";
import PropTypes from "prop-types";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {foldOpen: false};
    this._foldableRef = React.createRef();
    this.handleFold = this.handleFold.bind(this);
  }

  handleFold() {
    this.setState(oldState => ({foldOpen: !oldState.foldOpen}));
  }

  handleClick(child) {
    if (this.props.onMenuClick) {
      this.props.onMenuClick();
    }
    if (child && child.props && child.props.onClick) {
      child.props.onClick();
    }
  }

  renderChild(child) {
    return React.cloneElement(
      child,
      {
        onMenuClick: () => {
          if (this.props.onMenuClick) {
            this.props.onMenuClick();
          }
          if (this.props.autoClose) {
            this.setState({foldOpen: false});
          }
        },
      },
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
    if (childrenArray.length === 0) {
      throw new Error("NavbarItem missing children");
    }
    const haveDropdown = childrenArray.length > 1;
    if (haveDropdown) {
      if (this.props.foldable) {
        return this.renderFoldable(childrenArray);
      }
      const classes = ["navbar-link"];
      if (this.props.arrowless) {
        classes.push("is-arrowless");
      }
      return <div className="navbar-item has-dropdown is-hoverable">
        <a className={classes.join(" ")}>
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
        onClick: () => this.handleClick(childrenArray[0]),
        className: childrenArray[0].props.className
          ? (`${childrenArray[0].props.className} navbar-item`)
          : "navbar-item",
      },
    );
  }
}
Item.propTypes = {
  children: PropTypes.node.isRequired,
  arrowless: PropTypes.bool,
  onMenuClick: PropTypes.func,
  foldable: PropTypes.bool,
  autoClose: PropTypes.bool,
};
Item.defaultProps = {
  arrowless: false,
  onMenuClick: undefined,
  foldable: false,
  autoClose: false,
};
Item.displayName = "NavbarItem";
