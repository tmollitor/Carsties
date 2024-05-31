import React from "react";
import { AiOutlineCar } from "react-icons/ai";
import Search from "./Search";
import Logo from "./Logo";

export default function Navbar() {
  console.log("Client component");
  return (
    <header
      className="
      sticky top-0 x-50 flex justify-between bg-white p-5 item-center text-gray-800 shadow-md
      "
    >
      <Logo />
      <Search />
      <div>Login</div>
    </header>
  );
}
