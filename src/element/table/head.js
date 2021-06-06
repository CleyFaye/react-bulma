import React from "react";
import PropTypes from "prop-types";

export default class Head extends React.Component {
  render() {
    return <thead>
      {this.props.children}
    </thead>;
  }
}
Head.propTypes = {children: PropTypes.node.isRequired};
Head.displayName = "Head";
