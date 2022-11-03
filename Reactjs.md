## Creating a react application
- cra - create-react-app cli
- next.js
- gatsby.js


## Redux Store theory
store => managing and providing the state
reducer => function that takes current state and action object and return updated state/current state
action => plain js object { type: 'actionname', payload?: anydataype }

action creators => function that returns action object

const actionCreator = () => {
  return { type: 'actionanem', payload: [] }
}

<!-- thunk function -->
const asyncActionCreator = async (dispatch) => {
  await fetch()
  return { type: 'actionanem', payload: [] }
}
<!-- thunk function creator -->
const asyncFunctionActionCreator = (params) => async (dispatch) => {
  await fetch()
  return { type: 'actionanem', payload: [] }
}
dispatch(asyncActionCreator) // dispatching async function
dispatch(asyncFunctionActionCreator(parmas)) // dispatching async function creator

dispatch => function
dispatch({ type: 'actionanem', payload: [] }) // dispatching action object
dispatch(actionCreator()) // dispatching action creator function

store.dispatch
store.getState();

redux-thunk // middleware
