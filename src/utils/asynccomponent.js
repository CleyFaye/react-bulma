import Component from "./component";

/** Helper to have components that load asynchronous data and must show a
 * loading state.
 *
 * Add two properties in the state:
 * - loading (number): If positive, a loading message must be displayed.
 * - error (string)
 *
 * To handle an asynchronous process, call AsyncComponent.load().
 *
 * To make the component display its loading state by default call the
 * initLoading() method.
 */
export default class AsyncComponent extends Component {
  constructor(props) {
    super(props);
    this.prepareState({
      loadingCount: 0,
      loading: false,
      error: null,
    });
  }

  /** Must be called in the constructor if you want to initially display a
   * loading state.
   */
  initLoading() {
    this.prepareState({
      loadingCount: true,
      loading: true,
    });
  }

  /** Setup the state to indicate that an asynchronous task is running.
   *
   * @param {func} promiseFunc
   * A function that returns a promise.
   * The component will be set to loading before this function is called, and
   * will remove the loading state after the promise resolve or reject.
   *
   * @param {bool} silenceError
   * Do not rethrow error
   *
   * @return {Promise}
   */
  load(promiseFunc, silenceError) {
    return this.updateState(oldState => ({
      loadingCount: (oldState.loadingCount === true)
        ? 1
        : oldState.loadingCount + 1,
      loading: true,
      error: null,
    })).then(() => promiseFunc())
      .then(res => {
        return this.updateState(oldState => ({
          loadingCount: oldState.loadingCount - 1,
          loading: oldState.loadingCount > 1,
        })).then(() => res);
      }).catch(error => {
        return this.updateState(oldState => ({
          loadingCount: oldState.loadingCount - 1,
          loading: oldState.loadingCount > 1,
          error,
        })).then(() => {
          if (!silenceError) {
            throw error;
          }
        });
      });
  }
}