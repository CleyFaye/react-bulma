import React from "react";
import PropTypes from "prop-types";

import {boolOptions} from "../utils/props";
import {classNamePropType} from "../utils/props";
import {modifiersPropsList} from "../utils/props";
import {bringAll} from "../utils/modifier";
import {addClassesFromOptions} from "../utils/class";
import {classString} from "../utils/class";

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
export default class Pagination extends React.Component {
  handleClick(pageId) {
    if (this.props.onSelect) {
      this.props.onSelect(pageId);
    }
  }

  _getPageCount() {
    return this._getPageLast() - this._getPageFirst() + 1;
  }

  _getPageFirst() {
    return (this.props.pageCount !== undefined)
      ? 1
      : this.props.start;
  }

  _getPageLast() {
    return (this.props.pageCount !== undefined)
      ? this.props.pageCount
      : this.props.end;
  }

  _getMaxVisible() {
    return this.props.maxVisible
      ? this.props.maxVisible
      : this._getPageCount();
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
    return (leftBound <= this._getPageFirst())
      ? this._getPageFirst() + 1
      : leftBound;
  }

  _centralRightBound() {
    const rightBound = this._current() + this._centralGroupSideSize();
    return (rightBound >= this._getPageLast())
      ? this._getPageLast() - 1
      : rightBound;
  }

  /** Determine if we should show ellipsis on the left side */
  _haveEllipsisLeft() {
    return this._centralLeftBound() > (this._getPageFirst() + 1);
  }

  _haveEllipsisRight() {
    return this._centralRightBound() < (this._getPageLast() - 1);
  }

  _createButton(page) {
    const className = (page == this._current())
      ? "pagination-link is-current"
      : "pagination-link";
    return <li key={page}>
      <a
        className={className}
        onClick={() => this.handleClick(page)}>
        {page}
      </a>
    </li>;
  }

  _createEllipsis() {
    return <li><span className="pagination-ellipsis">&hellip;</span></li>;
  }

  render() {
    const buttons = [];
    buttons.push(this._createButton(this._getPageFirst()));
    if (this._haveEllipsisLeft()) {
      buttons.push(this._createEllipsis());
    }
    for (let index = this._centralLeftBound(),
      last = this._centralRightBound();
      index <= last;
      ++index) {
      buttons.push(this._createButton(index));
    }
    if (this._haveEllipsisRight()) {
      buttons.push(this._createEllipsis());
    }
    if (this._getPageCount() != 1) {
      buttons.push(this._createButton(this._getPageLast()));
    }

    const buttonSection = this.props.hideButtons
      ? undefined
      : <React.Fragment>
        <a className="pagination-previous">{this.props.previousLabel || "Previous"}</a>
        <a className="pagination-next">{this.props.nextLabel || "Next"}</a>
      </React.Fragment>;

    const navClasses = ["pagination"];
    addClassesFromOptions(
      navClasses,
      this.props,
      undefined,
      boolOptions([
        "rounded",
      ]));
    bringAll(navClasses, this.props, {size: true});

    return <nav
      className={classString(navClasses, this.props.className)}
      role="navigation">
      {buttonSection}
      <ul className="pagination-list">
        {buttons}
      </ul>
    </nav>;
  }
}
Pagination.propTypes = {
  className: classNamePropType,
  start: PropTypes.number,
  current: PropTypes.number,
  end: PropTypes.number,
  pageCount: PropTypes.number,
  maxVisible: PropTypes.number,
  hideButtons: PropTypes.bool,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  rounded: PropTypes.bool,
  size: modifiersPropsList.size,
  onSelect: PropTypes.func,
};