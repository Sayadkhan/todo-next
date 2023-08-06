import React from "react";
import style from "../scss/addtodo.module.scss";

const AddTodo = () => {
  return (
    <form className={style.main_form}>
      <input
        className={style.title_input}
        title="title"
        type="text"
        placeholder="Write-your-work title"
      />
      <input
        className={style.title_input}
        title="title"
        type="text"
        placeholder="Write description"
      />
      <button className={style.addTopicBtn}>Add Topic</button>
    </form>
  );
};

export default AddTodo;
