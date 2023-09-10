import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { getImages } from '../service/cloudinaryService';

function useGetImages() {
  return useInfiniteQuery<Awaited<ReturnType<typeof getImages>>, Error>({
    queryKey: ['images'],
    queryFn: (nextCursor) => getImages(nextCursor),
    getNextPageParam: (currentPage, totalPages) => {
      console.log(currentPage);
      return currentPage.next_cursor;
    },
  });
}

export default useGetImages;
