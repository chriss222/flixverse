import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import PlaceHolderCards from "./PlaceHolderCards";

const InfiniteScrollComponent = ({ queryKey, queryFn, title, pageLimitIncrement = 5 }) => {
  const { data, fetchNextPage, isLoading, isFetching, hasNextPage } = useInfiniteQuery({
    queryKey,
    queryFn,
    placeholderData: { pages: [] },
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
  });

  const [pageLimit, setPageLimit] = useState(pageLimitIncrement);
  const pagesLoaded = data?.pages.length || 0;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <InfiniteScroll
        dataLength={data?.pages.flatMap((page) => page.results).length}
        next={fetchNextPage}
        hasMore={hasNextPage && pagesLoaded < pageLimit}
        loader={null}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data?.pages.flatMap((page) =>
            page.results.map((media, i) => (
              <MovieCard
                key={`${media.id}-${i}`}
                id={media.id}
                posterPath={media.poster_path}
                title={media.title || media.name}
                type={media.media_type}
                score={media.vote_average}
                overview={media.overview}
                page={page.page}
              />
            ))
          )}
          {(isFetching || isLoading) && <PlaceHolderCards />}
        </div>
      </InfiniteScroll>
      {hasNextPage && pagesLoaded >= pageLimit && (
        <div className="text-center mt-4">
          <button
            onClick={() => setPageLimit((prevLimit) => prevLimit + pageLimitIncrement)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
            disabled={isFetching}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollComponent;
