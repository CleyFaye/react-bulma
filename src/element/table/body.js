import React from "react";
import PropTypes from "prop-types";

export default class Body extends React.Component {
  render() {
    return <tbody>
      {this.props.children}
    </tbody>;
  }
}
Body.propTypes = {children: PropTypes.node.isRequired};
Body.displayName = "Body";
