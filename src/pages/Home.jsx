import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchTrendingData } from "../features/api/api";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const { data, fetchNextPage, isLoading, isFetching, hasNextPage } = useInfiniteQuery({
    queryKey: ["trending"],
    queryFn: ({ pageParam = 1 }) => fetchTrendingData(pageParam),
    placeholderData: { pages: [] },
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
  });

  const [pageLimit, setPageLimit] = useState(2);
  const pagesLoaded = data?.pages.length || 0;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trending This Week</h1>
      <InfiniteScroll
        dataLength={data?.pages.flatMap((page) => page.results).length}
        next={fetchNextPage}
        hasMore={hasNextPage && pagesLoaded < pageLimit}
        loader={<div className="text-white text-center mt-4">Loading more...</div>}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data?.pages.flatMap((page) =>
            page.results.map((media) => (
              <MovieCard
                id={media.id}
                posterPath={media.poster_path}
                title={media.title || media.name}
                type={media.media_type}
                score={media.vote_average}
                overview={media.overview}
              />
            ))
          )}
        </div>
      </InfiniteScroll>
      {hasNextPage && pagesLoaded >= pageLimit && (
        <div className="text-center mt-4">
          <button
            onClick={() => setPageLimit((prevLimit) => prevLimit + 2)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
