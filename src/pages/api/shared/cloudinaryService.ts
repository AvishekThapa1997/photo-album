import cloudinary from '../lib/cloudinary';

async function getImageFromCloudinary(nextCursor: string) {
  const result = await cloudinary.search
    .expression('resource_type:image')
    .sort_by('public_id', 'desc')
    .next_cursor(nextCursor)
    .max_results(20)
    .execute();
  return result;
}

export { getImageFromCloudinary };
