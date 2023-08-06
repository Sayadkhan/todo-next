import Todo from "@/models/todo";
import { NextResponse } from "next/server";
import connetMongoDB from "@/libs/mongobd";

// export async function PUT(request: Request, { params }: { params: any }) {
//   try {
//     const { id } = params;
//     const { title, status } = await request.json();

//     if (!id) {
//       return NextResponse.json(
//         { message: "Invalid request. Missing 'id' parameter." },
//         { status: 400 }
//       );
//     }
//     await connetMongoDB();

//     const todo = await Todo.findByIdAndUpdate(
//       id,
//       { title, status },
//       { new: true }
//     );
//     return NextResponse.json(todo);
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

export async function PATCH(req: Request, { params }: { params: any }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();

  await connetMongoDB();
  req.headers.set("Access-Control-Allow-Origin", "*");
  req.headers.set("Access-Control-Allow-Methods", "POST");
  req.headers.set("Access-Control-Allow-Headers", "Content-Type");
  await Todo.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(req: Request, { params }: { params: any }) {
  const { id } = params;
  req.headers.set("Access-Control-Allow-Origin", "*");
  req.headers.set("Access-Control-Allow-Methods", "POST");
  req.headers.set("Access-Control-Allow-Headers", "Content-Type");
  await connetMongoDB();
  const todo = await Todo.findOne({ _id: id });
  return NextResponse.json({ todo }, { status: 200 });
}
