import connetMongoDB from "@/libs/mongobd";

export async function POST(req: Request) {
  const { title, description } = await req.json();
  await connetMongoDB();
}
