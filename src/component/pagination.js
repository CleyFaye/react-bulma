import React from "react";
import PropTypes from "prop-types";

import {
  boolOptions,
  classNamePropType,
  modifiersPropsList,
} from "../utils/props.js";
import {bringAll} from "../utils/modifier.js";
import {addClassesFromOptions} from "../utils/class.js";
import clsx from "clsx";

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
  static _createEllipsis() {
    return <li><span className="pagination-ellipsis">&hellip;</span></li>;
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    const pageId = parseInt(ev.target.dataset.pageId, 10);
    if (this.props.onSelect) {
      this.props.onSelect(pageId);
    }
  }

  _getPageCount() {
    return this._getPageLast() - this._getPageFirst() + 1;
  }

  _getPageFirst() {
    return (this.props.pageCount === undefined)
      ? this.props.start
      : 1;
  }

  _getPageLast() {
    return (this.props.pageCount === undefined)
      ? this.props.end
      : this.props.pageCount;
  }

  _getMaxVisible() {
    return this.props.maxVisible
      ? this.props.maxVisible
      : this._getPageCount();
  }

  /** Maximum size of the "central group" of buttons */
  _centralGroupMaxSize() {
    const skipFirstAndLast = 2;
    return this._getMaxVisible() - skipFirstAndLast;
  }

  /** Maximum number of buttons on each side of the "current" page */
  _centralGroupSideSize() {
    const halfDivider = 2;
    return Math.ceil(this._centralGroupMaxSize() / halfDivider);
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
    const className = (page === this._current())
      ? "pagination-link is-current"
      : "pagination-link";
    return <li key={page}>
      <a
        className={className}
        data-page-id={page}
        onClick={this.handleClick}
      >
        {page}
      </a>
    </li>;
  }

  render() {
    const buttons = [];
    buttons.push(this._createButton(this._getPageFirst()));
    if (this._haveEllipsisLeft()) {
      buttons.push(Pagination._createEllipsis());
    }
    for (let index = this._centralLeftBound(),
      last = this._centralRightBound();
      index <= last;
      ++index) {
      buttons.push(this._createButton(index));
    }
    if (this._haveEllipsisRight()) {
      buttons.push(Pagination._createEllipsis());
    }
    if (this._getPageCount() !== 1) {
      buttons.push(this._createButton(this._getPageLast()));
    }

    const buttonSection = this.props.hideButtons
      ? undefined
      : <>
        <a className="pagination-previous">{this.props.previousLabel}</a>
        <a className="pagination-next">{this.props.nextLabel}</a>
      </>;

    const navClasses = ["pagination"];
    addClassesFromOptions(
      navClasses,
      this.props,
      undefined,
      boolOptions([
        "rounded",
      ]),
    );
    bringAll(navClasses, this.props, {size: true});

    return <nav
      className={clsx(navClasses, this.props.className)}
      role="navigation"
    >
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
  current: PropTypes.number.isRequired,
  end: PropTypes.number,
  pageCount: PropTypes.number,
  maxVisible: PropTypes.number,
  hideButtons: PropTypes.bool,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  rounded: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  size: modifiersPropsList.size,
  // eslint-disable-next-line react/no-unused-prop-types
  onSelect: PropTypes.func,
};
Pagination.defaultProps = {
  className: undefined,
  start: undefined,
  end: undefined,
  pageCount: undefined,
  maxVisible: undefined,
  hideButtons: undefined,
  previousLabel: "Previous",
  nextLabel: "Next",
  rounded: false,
  size: undefined,
  onSelect: undefined,
};
Pagination.displayName = "Pagination";
