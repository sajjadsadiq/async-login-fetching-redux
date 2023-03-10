const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./function");
const thunk = require("redux-thunk")

// Step 01: Initial State Define
const initialState = {
  todos: [],
};

// Step 02: Create Redcuer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
  }
};

// Step 03: Create Store
const store = createStore(todoReducer, applyMiddleware(thunk.default));

// Step 04: Subscribe to state change
store.subscribe(() => {
  console.log(store.getState());
});

// Step 05: Dispatch Action
store.dispatch(fetchTodos);
