export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, {type: '__INIT__'})
  const subscibers = []

  return {
    // action === { type: 'INCREMENT }
    dispatch(action) {
      state = rootReducer(state, action)
      subscibers.forEach(sub => sub())
    },
    subscribe(callback) {
      subscibers.push(callback)
    },
    getState() {
      return state
    }
  }
}