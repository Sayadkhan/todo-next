import connetMongoDB from "@/libs/mongobd";
import Todo from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, description } = await req.json();
  await connetMongoDB();
  await Todo.create({ title, description });
  return NextResponse.json({ message: "Todo Created" }, { status: 201 });
}

export async function GET() {
  await connetMongoDB();
  const todos = await Todo.find();
  return NextResponse.json({ todos }, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  await connetMongoDB();
  await Todo.findByIdAndDelete(id);

  return NextResponse.json({ message: "todo deleted" }, { status: 201 });
}
