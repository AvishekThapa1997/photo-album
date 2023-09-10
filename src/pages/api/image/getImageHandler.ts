import CloudinaryGetImageResponse from '@src/features/shared/types/CloudinaryGetImageResponse';
import asyncWrapper from '../util/asyncWrapper';
import { getImageFromCloudinary } from '../shared/cloudinaryService';
const getImageHandler = asyncWrapper(async (req, res) => {
  const query = req.query;
  const result = (await getImageFromCloudinary(
    query.nextCursor as string,
  )) as CloudinaryGetImageResponse;
  res.status(200).json({
    success: true,
    ...result,
  });
});

export default getImageHandler;
