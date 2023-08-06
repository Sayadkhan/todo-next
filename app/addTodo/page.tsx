"use client";

import React, { useState } from "react";
import style from "../scss/addtodo.module.scss";
import { useRouter } from "next/navigation";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescriptiom] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !description) {
      alert(`Title and descrpition ar required`);
      return;
    }
    try {
      const res = await fetch(`/api/todos`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.main_form}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={style.title_input}
        title="title"
        type="text"
        placeholder="Your Task"
      />
      <textarea
        className={style.title_input_description}
        onChange={(e) => setDescriptiom(e.target.value)}
        value={description}
        title="title"
        placeholder="Write description"
      />
      <div className={style.button_div}>
        <button type="submit" className={style.addTopicBtn}>
          Add Topic
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
