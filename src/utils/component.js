import React from "react";

// TODO use @cley_faye/react-utils instead

/** Helper to use React components with promise and inheritance.
 *
 * In addition to being able to use the methods of this class, you should not
 * initialize the state with an assignment but use the prepareState() method.
 *
 * super.componentWillUnmount() must be called in componentWillUnmount().
 */
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._dismounted = false;
  }

  componentWillUnmount() {
    this._dismounted = true;
  }

  /** Put properties in the state.
   *
   * Instead of doing `this.state = {/*...*\/}` in the constructor call this
   * method; it makes sure that when you inherit you don't erase the state
   * from other classes.
   */
  prepareState(state) {
    Object.assign(this.state, state);
  }

  /** Update the state (replace setState())
   *
   * @param {object|function} state
   * Same behavior as setState()
   *
   * @returns {Promise}
   * The promise resolve when the state is applied
   */
  updateState(state) {
    return new Promise(resolve => {
      if (this._dismounted) {
        resolve();
        return;
      }
      this.setState(state, () => resolve());
    });
  }
}
Component.displayName = "Component";
