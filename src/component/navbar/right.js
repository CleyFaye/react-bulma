import React from "react";
import PropTypes from "prop-types";

export default class Right extends React.Component {
  renderChilds() {
    return React.Children.toArray(this.props.children)
      .map(child => React.cloneElement(
        child,
        {onMenuClick: this.props.onMenuClick},
      ));
  }

  render() {
    return <div className="navbar-end">
      {this.renderChilds()}
    </div>;
  }
}
Right.propTypes = {
  children: PropTypes.node.isRequired,
  onMenuClick: PropTypes.func,
};
Right.defaultProps = {onMenuClick: undefined};
Right.displayName = "Right";
