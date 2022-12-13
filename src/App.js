import "./App.css";
import { useDispatch } from "react-redux";
import addTodo from "./redux/todo/thunk/addTodo";
import Header from "./ui/Header";
import Home from "./components/home/Home";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import fetchTodo from "./redux/todo/thunk/fetchTodos";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div className="h-full max-w-[1520px] m-auto px-4 sm:px-12">
      <Header />
      <div className="mt-28">
        <Home />
      </div>
      <Toaster toastOptions={{ duration: 2000, position: "top-right" }} />
    </div>
  );
}

export default App;
