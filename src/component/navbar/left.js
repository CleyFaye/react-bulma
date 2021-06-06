import React from "react";
import PropTypes from "prop-types";

export default class Left extends React.Component {
  renderChilds() {
    return React.Children.toArray(this.props.children)
      .map(child => React.cloneElement(
        child,
        {onMenuClick: this.props.onMenuClick},
      ));
  }

  render() {
    return <div className="navbar-start">
      {this.renderChilds()}
    </div>;
  }
}
Left.propTypes = {
  children: PropTypes.node.isRequired,
  onMenuClick: PropTypes.func,
};
Left.defaultProps = {onMenuClick: undefined};
Left.displayName = "Left";
