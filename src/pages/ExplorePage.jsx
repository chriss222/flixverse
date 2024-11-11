import React from "react";
import { useParams } from "react-router-dom";
import { fetchTrendingData } from "../features/api/api";
import InfiniteScrollComponent from "../components/InfiniteScrollComponent";

const ExplorePage = () => {
  const { explore } = useParams();

  return (
    <InfiniteScrollComponent
      queryKey={[`${explore}-trending`]}
      queryFn={({ pageParam = 1 }) => {
        // console.log("page param: ", pageParam);
        // return new Promise((resolve) => setTimeout(resolve, 1000000)).then(() => fetchTrendingData(pageParam, explore));
        return fetchTrendingData(pageParam, explore);
      }}
      title={`Trending ${explore === "movie" ? "Movies" : "TV Shows"} This Week`}
    />
  );
};

export default ExplorePage;
