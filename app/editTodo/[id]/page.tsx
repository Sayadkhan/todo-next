"use client";

import EditTopicForm from "@/components/EditTopicForm";
import React, { useEffect, useState } from "react";

interface todoStateProps {
  params: any;
}

const EditTopic: React.FC<todoStateProps> = ({ params }) => {
  const { id } = params;
  console.log("id");

  const [data, setData] = useState();

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetch(`/api/todos/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch task");
        }

        return setData(await res.json());
      } catch (error) {
        console.log("Error Loading Tasks", error);
      }
    };
    getTodos();
  }, [id]);

  return (
    <div>
      <EditTopicForm data={data} id={id} />
    </div>
  );
};

export default EditTopic;
