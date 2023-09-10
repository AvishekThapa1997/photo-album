import { createAxiosClient } from './axios';

const cloudinaryImageApiUrl =
  process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL + '/image';
const cloudinaryAdminApiUrl =
  process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL + '/resources';
const cloudinaryImageClient = createAxiosClient(cloudinaryImageApiUrl);
const cloudinaryAdminClient = createAxiosClient(cloudinaryAdminApiUrl);

cloudinaryAdminClient.interceptors.request.use((config) => {
  config.auth = {
    username: process.env.NEXT_PUBLIC_API_KEY!,
    password: process.env.NEXT_PUBLIC_API_SECRET!,
  };
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

export { cloudinaryImageClient, cloudinaryAdminClient };
