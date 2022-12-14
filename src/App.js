import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import React, { Suspense, useEffect } from "react";
import fetchTodo from "./redux/todo/thunk/fetchTodos";
import SpinnerLoading from "./ui/SpinnerLoading";
const Header = React.lazy(() => import("./ui/Header"));
const Home = React.lazy(() => import("./components/home/Home"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div className="h-full max-w-[1520px] m-auto px-4 sm:px-12">
      <Suspense fallback={<SpinnerLoading />}>
        <Header />
        <div className="mt-12 sm:mt-28">
          <Home />
        </div>
      </Suspense>
      <Toaster toastOptions={{ duration: 2000, position: "top-right" }} />
    </div>
  );
}

export default App;
