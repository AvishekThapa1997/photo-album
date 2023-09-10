import { NextApiRequest, NextApiResponse } from 'next';

function asyncWrapper(
  func: (req: NextApiRequest, res: NextApiResponse) => Promise<void>,
): (req: NextApiRequest, res: NextApiResponse) => Promise<void> {
  return async (req, res) => {
    try {
      await func(req, res);
    } catch (err) {
      res.status(500).json({
        error: true,
        message: 'Something went wrong',
      });
    }
  };
}

export default asyncWrapper;
