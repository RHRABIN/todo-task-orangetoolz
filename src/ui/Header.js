import React from "react";
import { useDispatch } from "react-redux";
import logo from "../assests/logo.jpg";
import { searchText } from "../redux/filters/actions";
import avatar from "../assests/avatar.png";

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
      {/* logo */}
      <div className="flex items-center flex-shrink-0 w-full h-16  bg-opacity-75 justify-between flex-col sm:flex-row mb-28 sm:mb-0">
        <div className="flex gap-4 items-center">
          <img src={logo} className={"w-[220px] h-[114px]"} />
        </div>

        {/* search field */}
        <div>
          <input
            className="flex items-center w-[18.75rem] h-10 px-4  text-sm bg-gray-200 rounded-full focus:outline-none focus:ring"
            type="search"
            placeholder="Search for todo"
            onChange={(e) => handleUpdateSearch(e.target.value)}
          />
        </div>

        {/* Avatar image */}
        <div className=" gap-2 items-center hidden sm:flex">
          <buton className="flex items-center justify-center w-12 h-12 ml-auto overflow-hidden rounded-full cursor-pointer">
            <img src={avatar} alt="avatar" />
          </buton>
        </div>
      </div>
    </div>
  );
};

export default Header;
