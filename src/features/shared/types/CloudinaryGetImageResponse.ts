import CloudinaryImageResponse from './CloudinaryImageResponse';

interface CloudinaryGetImageResponse {
  total_count: string;
  next_cursor: string;
  resources: CloudinaryImageResponse[];
}

export default CloudinaryGetImageResponse;
