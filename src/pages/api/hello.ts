// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<Data>
): void => {
  response.status(200).json({ name: `John Doe` });
};

export default handler;
