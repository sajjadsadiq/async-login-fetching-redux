const { createStore, applyMiddleware } = require("redux");
const { fetchingAsyncMiddleware } = require("./middlewares");
const { fetchTodos } = require("./function");

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
const store = createStore(todoReducer, applyMiddleware(fetchingAsyncMiddleware));

// Step 04: Subscribe to state change
store.subscribe(() => {
  console.log(store.getState());
});

// Step 05: Dispatch Action
store.dispatch(fetchTodos);
