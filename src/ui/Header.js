import React from "react";
import { useDispatch } from "react-redux";
import logo from "../assests/logo.jpg";
import { searchText } from "../redux/filters/actions";

const Header = () => {
  const dispatch = useDispatch();

  // debounce function for search todo
  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  // change search text in the redux store by onChange
  const changeSearchText = (value) => {
    dispatch(searchText(value));
  };

  // update search by debouncing after 500 ms
  const handleUpdateSearch = debounceHandler(changeSearchText, 500);

  return (
    <div>
      <div className="flex items-center flex-shrink-0 w-full h-16  bg-opacity-75 justify-between flex-col sm:flex-row mb-28 sm:mb-0">
        <div className="flex gap-4 items-center">
          <img src={logo} className={"w-[220px] h-[114px]"} />
        </div>
        <div>
          <input
            className="flex items-center w-[18.75rem] h-10 px-4  text-sm bg-gray-200 rounded-full focus:outline-none focus:ring"
            type="search"
            placeholder="Search for todo"
            onChange={(e) => handleUpdateSearch(e.target.value)}
          />
        </div>
        <div className=" gap-2 items-center hidden sm:flex">
          <buton className="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer">
            <img
              src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512"
              alt=""
            />
          </buton>
        </div>
      </div>
    </div>
  );
};

export default Header;
