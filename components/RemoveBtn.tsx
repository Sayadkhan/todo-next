import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

import Style from "../app/scss/main.module.scss";

const RemoveBtn = () => {
  return (
    <button title="removeTodo" className={Style.removeBtn}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
