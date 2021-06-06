import React from "react";
import PropTypes from "prop-types";

export default class Foot extends React.Component {
  render() {
    return <tfoot>
      {this.props.children}
    </tfoot>;
  }
}
Foot.propTypes = {children: PropTypes.node.isRequired};
Foot.displayName = "Foot";
