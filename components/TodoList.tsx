"use client";

import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import style from "../app/scss/todoList.module.scss";
import axios from "axios";

interface todoStateProps {}

const TodoList: React.FC<todoStateProps> = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/todos`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch task");
        }

        return setTasks(await res.json());
      } catch (error) {
        console.log("Error Loading Tasks", error);
      }
    };
    getTodos();
  }, []);

  return (
    <>
      {tasks?.map((task: any) => (
        <div key={task.id} className={style.container_div}>
          <div>
            <h2 className={style.todoTitle}>{task?.title}</h2>
            <div>{task?.description}</div>
          </div>
          {/* buttopn edit and remove */}
          <div className={style.buttonDiv}>
            <RemoveBtn id={task._id} />
            <div>
              <Link href={`/editTodo/${task._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
