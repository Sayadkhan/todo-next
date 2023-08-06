import React from "react";
import style from "../scss/delete.module.scss";
import { useRouter } from "next/navigation";

import Link from "next/link";

const DeleteTask = () => {
  return (
    <div className={style.delete}>
      <div>Your Task Has been deleted</div>
      <Link href={"/"} className={style.gotohome}>
        Go to Home
      </Link>
    </div>
  );
};

export default DeleteTask;
