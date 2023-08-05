import Link from "next/link";
import React from "react";
import style from "../app/scss/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.header}>
      <Link href={"/"}>Daily Doze</Link>
      <Link href={"/addTodo"}>Add Task</Link>
    </nav>
  );
};

export default Navbar;
