import React from "react";
import logo from "../assests/logo.jpg";
const Header = () => {
  return (
    <div>
      <div className="flex items-center flex-shrink-0 w-full h-16  bg-opacity-75 justify-between">
        <div className="flex gap-4 items-center">
          <img src={logo} className={"w-[220px] h-[114px]"} />
        </div>
        <div>
          <input
            className="flex items-center w-[18.75rem] h-10 px-4  text-sm bg-gray-200 rounded-full focus:outline-none focus:ring"
            type="search"
            placeholder="Search for todo"
          />
        </div>
        <div className="flex gap-2 items-center">
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
