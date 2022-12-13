import "./App.css";
import { useDispatch } from "react-redux";
import addTodo from "./redux/todo/thunk/addTodo";

function App() {
  const dispatch = useDispatch();
  const handleAdd = () => {
    const todo = {
      id: Date.now(),
      name: "Todo 2",
      status: "todo",
      createdAt: Date.now(),
    };
    dispatch(addTodo(todo));
  };
  return (
    <div>
      <h1>hello redux</h1>
      <h2>hello rabin</h2>
      <button onClick={handleAdd}>Add to a task</button>
    </div>
  );
}

export default App;
