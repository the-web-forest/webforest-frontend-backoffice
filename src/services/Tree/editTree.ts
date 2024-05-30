import { Tree } from "@/interfaces";

interface EditTreeParams {
  name: Tree["name"];
  to: string;
}

type EditTreeResponse = Promise<unknown>;

export default async function ({ name }: EditTreeParams): EditTreeResponse {
  return await setTimeout(() => name, 3000);
}
