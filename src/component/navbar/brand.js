import React from "react";
import PropTypes from "prop-types";

export default class Brand extends React.Component {
  render() {
    return <div className="navbar-brand">
      {this.props.children}
      <a
        role="button"
        className={this.props.burgerClass}
        onClick={this.props.onClick}
      >
        <span />
        <span />
        <span />
      </a>
    </div>;
  }
}
Brand.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  burgerClass: PropTypes.string,
};
Brand.defaultProps = {
  onClick: undefined,
  burgerClass: undefined,
};
Brand.displayName = "Brand";
