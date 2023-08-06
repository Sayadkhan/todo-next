import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.models.Todos || mongoose.model("Todo", todoSchema);

export default Todo;
