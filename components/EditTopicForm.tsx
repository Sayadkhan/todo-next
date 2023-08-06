"use client";

import React, { useState } from "react";
import style from "../app/scss/addtodo.module.scss";
import { useRouter } from "next/navigation";

interface todoStateProps {
  data: any;
  id: any;
}

const EditTopicForm: React.FC<todoStateProps> = ({ data, id }) => {
  console.log(data);

  const router = useRouter();

  const [newData, setNewData] = useState(data);
  const [newTitle, setNewTitle] = useState(data?.todo.title);

  const [newDescription, setNewDescription] = useState(data?.todo.description);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`/${data?.todo._id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.refresh();
      router.push("/");
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmit} className={style.main_form}>
      <input
        className={style.title_input}
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        title="title"
        type="text"
        placeholder="Write-your-work title"
      />
      <input
        className={style.title_input}
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        title="title"
        type="text"
        placeholder="Write description"
      />
      <button type="submit" className={style.addTopicBtn}>
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
