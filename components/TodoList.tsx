import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import style from "../app/scss/todoList.module.scss";

const TodoList = () => {
  return (
    <>
      <div className={style.container_div}>
        <div>
          <h2 className={style.todoTitle}>Title</h2>
          <div>Description</div>
        </div>
        {/* buttopn edit and remove */}
        <div className={style.buttonDiv}>
          <RemoveBtn />
          <div>
            <Link href={"/editTodo/id"}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
