import "./App.css";
import { useDispatch } from "react-redux";
import addTodo from "./redux/todo/thunk/addTodo";
import Header from "./ui/Header";

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
    <div className="h-full max-w-[1520px] m-auto px-2">
      <Header />
    </div>
  );
}

export default App;
