import type { NextApiRequest, NextApiResponse } from 'next';
import getImages from './getImageHandler';
import HttpMethods from '../types/HttpMethod';

type RequestHandler = {
  [Key in HttpMethods]?: (
    req: NextApiRequest,
    res: NextApiResponse,
  ) => Promise<void>;
};
const requestHandlers: RequestHandler = {
  GET: getImages,
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const methodType = req.method as HttpMethods;
  const currentRequestHandler = requestHandlers[methodType];
  if (!currentRequestHandler) {
    return res.status(404).json({
      message: 'Resource not found',
    });
  }
  await currentRequestHandler(req, res);
}
