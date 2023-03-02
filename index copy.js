const { createStore, applyMiddleware } = require("redux");
const {
  delayActionMiddleware,
  fetchingTodoMiddleware,
} = require("./middlewares");

// Initial State
const initialState = {
  todos: [],
};

// Create Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [...state.todos, { title: action.payload }],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state;
  }
};

// Craete Store
const store = createStore(
  todoReducer,
  applyMiddleware(delayActionMiddleware, fetchingTodoMiddleware)
);

// Subscribe to state change
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Actions
// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "How to learn Redux",
// });
store.dispatch({
  type: "todos/fetchTodos",
});
