"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

import Style from "../app/scss/main.module.scss";
import { useRouter } from "next/navigation";

interface todoStateProps {
  id: any;
}

const RemoveBtn: React.FC<todoStateProps> = ({ id }) => {
  const router = useRouter();

  const removeTask = async () => {
    {
      const res = await fetch(`http://localhost:3000/api/todos?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        console.log("task remove succefully");
        router.push("/deleteTask");
      }
    }
  };
  return (
    <button onClick={removeTask} title="removeTodo" className={Style.removeBtn}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
