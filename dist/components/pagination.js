"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Props:
 * - start: first page displayed (overriden by pageCount)
 * - current
 * - end: last page displayed (overriden by pageCount)
 * - pageCount: total number of pages starting from 1 (optional)
 * - maxVisible: max number of visible page buttons. If missing, display them
 *   all.
 * - hideButtons: hide the Previous/next buttons
 * - previousLabel
 * - nextLabel
 * - rounded: if buttons must be rounded
 * - size: default to normal
 * - onSelect: callback that receive the newly selected page
 */
class Pagination extends _react.default.Component {
  handleClick(pageId) {
    if (this.props.onSelect) {
      this.props.onSelect(pageId);
    }
  }

  _getPageCount() {
    return this._getPageLast() - this._getPageFirst() + 1;
  }

  _getPageFirst() {
    return this.props.pageCount !== undefined ? 1 : this.props.start;
  }

  _getPageLast() {
    return this.props.pageCount !== undefined ? this.props.pageCount : this.props.end;
  }

  _getMaxVisible() {
    return this.props.maxVisible ? this.props.maxVisible : this._getPageCount();
  }
  /** Maximum size of the "central group" of buttons */


  _centralGroupMaxSize() {
    return this._getMaxVisible() - 2;
  }
  /** Maximum number of buttons on each side of the "current" page */


  _centralGroupSideSize() {
    return Math.ceil(this._centralGroupMaxSize() / 2);
  }

  _current() {
    return this.props.current;
  }

  _centralLeftBound() {
    const leftBound = this._current() - this._centralGroupSideSize();

    return leftBound <= this._getPageFirst() ? this._getPageFirst() + 1 : leftBound;
  }

  _centralRightBound() {
    const rightBound = this._current() + this._centralGroupSideSize();

    return rightBound >= this._getPageLast() ? this._getPageLast() - 1 : rightBound;
  }
  /** Determine if we should show ellipsis on the left side */


  _haveEllipsisLeft() {
    return this._centralLeftBound() > this._getPageFirst() + 1;
  }

  _haveEllipsisRight() {
    return this._centralRightBound() < this._getPageLast() - 1;
  }

  _createButton(page) {
    const className = page == this._current() ? "pagination-link is-current" : "pagination-link";
    return _react.default.createElement("li", null, _react.default.createElement("a", {
      className: className,
      onClick: () => this.handleClick(page)
    }, "page"));
  }

  _createEllipsis() {
    return _react.default.createElement("li", null, _react.default.createElement("span", {
      className: "pagination-ellipsis"
    }, "\u2026"));
  }

  render() {
    const buttons = [];
    buttons.push(this._createButton(this._getPageFirst()));

    if (this._haveEllipsisLeft()) {
      buttons.push(this._createEllipsis());
    }

    for (let index = this._centralLeftBound(), last = this._centralRightBound(); index <= last; ++index) {
      buttons.push(this._createButton(index));
    }

    if (this._haveEllipsisRight()) {
      buttons.push(this._createEllipsis());
    }

    buttons.push(this._createButton(this._getPageLast()));
    const buttonSection = this.props.hideButtons ? undefined : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("a", {
      className: "pagination-previous"
    }, this.props.previousLabel || "Previous"), _react.default.createElement("a", {
      className: "pagination-next"
    }, this.props.nextLabel || "Next"));
    const navClasses = ["pagination"];

    if (this.props.rounded) {
      navClasses.push("is-rounded");
    }

    if (this.props.size) {
      navClasses.push((0, _utils.default)(this.props.size));
    }

    return _react.default.createElement("nav", {
      className: navClasses,
      role: "navigation"
    }, buttonSection, _react.default.createElement("ul", {
      className: "pagination-list"
    }, buttons));
  }

}

exports.Pagination = Pagination;
Pagination.propTypes = {
  start: _propTypes.default.number,
  current: _propTypes.default.number,
  end: _propTypes.default.number,
  pageCount: _propTypes.default.number,
  maxVisible: _propTypes.default.number,
  hideButtons: _propTypes.default.bool,
  previousLabel: _propTypes.default.string,
  nextLabel: _propTypes.default.string,
  rounded: _propTypes.default.bool,
  size: _propTypes.default.string,
  onSelect: _propTypes.default.func
};
//# sourceMappingURL=pagination.js.map
