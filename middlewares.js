const fetchingTodoMiddleware = (store) => (next) => async (action) => {
  if (action.type === "todos/fetchDispatch") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=2"
    );
    const todos = await response.json();

    store.dispatch({
      type: "todos/todoLoaded",
      payload: todos,
    });
    console.log(`Number of Update Data ${store.getState().todos.length}`);
    return;
  }
  return next(action);
};

module.exports = {
  fetchingTodoMiddleware,
};
