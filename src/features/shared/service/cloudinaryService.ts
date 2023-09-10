import {
  cloudinaryAdminClient,
  cloudinaryImageClient,
} from '../lib/cloudinaryClient';
import CloudinaryImageUploadPayload from '../types/CloudinaryImageUploadPayload';
import CloudinaryImageResponse from '../types/CloudinaryImageResponse';
import { requestGet, requestPost } from './axiosService';
import CloudinaryGetImageResponse from '../types/CloudinaryGetImageResponse';
import axios from 'axios';

/**
 * Upload image to cloudinary
 * @param {File} image - Image to upload
 **/
async function uploadImage(image: File) {
  const payload: CloudinaryImageUploadPayload = {
    file: image,
    upload_preset: 'fwme8zca',
  };
  return requestPost<CloudinaryImageUploadPayload, CloudinaryImageResponse>(
    cloudinaryImageClient,
    '/upload',
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
}

/**
 * Get images from cloudinary
 **/
async function getImages({ pageParam = '' }: any) {
  return requestGet<CloudinaryGetImageResponse>(
    axios,
    `/api/image?nextCursor=${pageParam}`,
  );
}

export { uploadImage, getImages };
