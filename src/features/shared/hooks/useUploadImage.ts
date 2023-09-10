import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { uploadImage } from '../service/cloudinaryService';

function useUploadImage({
  onError,
  onMutate,
  onSettled,
  onSuccess,
}: Partial<
  Pick<UseMutationOptions, 'onError' | 'onMutate' | 'onSettled' | 'onSuccess'>
> = {}) {
  return useMutation<Awaited<ReturnType<typeof uploadImage>>, Error, any, any>({
    mutationKey: ['upload-image'],
    mutationFn: uploadImage,
  });
}

export default useUploadImage;
