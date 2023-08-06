import Link from "next/link";
import React from "react";
import style from "../app/scss/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.header}>
      <Link className={style.navItem} href={"/"}>
        Daily Doze
      </Link>
      <Link className={style.addToDo} href={"/addTodo"}>
        Add Task
      </Link>
    </nav>
  );
};

export default Navbar;
