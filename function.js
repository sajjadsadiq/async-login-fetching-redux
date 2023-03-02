const fetchTodos = async (dispatch, getState) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=2"
  );
  const todos = await response.json();

  dispatch({
    type: "todos/todoLoaded",
    payload: todos,
  });
  console.log(`Number of Update Data ${getState().todos.length}`);
  return;
};

module.exports = {
  fetchTodos,
};
