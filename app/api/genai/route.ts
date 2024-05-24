import { StreamingTextResponse } from "ai";

export async function POST(req: Request, res: Response) {
  const reqBody = await req.json();
  console.log(reqBody);
  // new new StreamingTextResponse();
}
