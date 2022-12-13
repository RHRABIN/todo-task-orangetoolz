const addTodo = (todoText) => {
  return async (dispatch) => {
    // declare an object for storing the localStorage data
    let todosData = {};

    const storeTodos = localStorage.getItem("todos");
    if (storeTodos) {
      todosData = JSON.parse(storeTodos);
    }
  };
};

export default addTodo;
