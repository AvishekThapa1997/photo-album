import UploadButton from '@src/features/shared/components/UploadButton';
import PageTitle from '@src/features/shared/components/PageTitle';
import Row from '@src/features/shared/components/Row';
import React, { useRef, useCallback } from 'react';
import useUploadImage from '@src/features/shared/hooks/useUploadImage';
import useGetImages from '@src/features/shared/hooks/useGetImages';
import ImageGrid from '@src/features/shared/components/ImageGrid';
import useIntersectionObserver from '@src/features/shared/hooks/useIntersectionObserver';
import ImageGridItem from '@src/features/shared/components/ImageGridItem';
import ImageCard from '@src/features/shared/components/ImageCard';
import { groupItemByNoOfColumns } from '@src/features/shared/lib/utils';

export default function GalleryPage() {
  const uploadImage = useUploadImage();
  const getImages = useGetImages();
  const elementRef = useIntersectionObserver<HTMLDivElement>(
    {
      root: null,
      threshold: 1.0,
    },
    useCallback(() => {
      if (getImages.hasNextPage && !getImages.isFetchingNextPage) {
        getImages.fetchNextPage();
      }
    }, [getImages]),
  );
  function imageSelectHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      uploadImage.mutate(file);
    }
  }
  return (
    <div className='h-full overflow-auto'>
      <Row className='items-center justify-between'>
        <PageTitle>gallery</PageTitle>
        <UploadButton
          className='gap-2'
          onImageSelectHandler={imageSelectHandler}
        />
      </Row>
      {getImages.data?.pages.length && getImages.data?.pages.length > 0 ? (
        <>
          <ImageGrid>
            {getImages.data.pages.map((page) => {
              return groupItemByNoOfColumns(page.resources, 4).map(
                (groupedItems, index) => {
                  return (
                    <ImageGridItem key={index}>
                      {groupedItems.map((item) => {
                        return (
                          <ImageCard
                            key={item.public_id}
                            alt={item.filename}
                            src={item.url}
                            height={400}
                            width={400}
                            className='p-2'
                          />
                        );
                      })}
                    </ImageGridItem>
                  );
                },
              );
            })}
          </ImageGrid>
          {/* {getImages.data.pages.map((data, pageIndex) => {
            return (
              <ImageGrid
                key={pageIndex}
                items={data.resources}
                className='mt-4'
              />
            );
          })} */}
          <div ref={elementRef} />
        </>
      ) : null}
    </div>
  );
}
