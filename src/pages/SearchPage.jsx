import React from "react";
import { useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";

const SearchPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q") || "";
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(["all-trending"]) || { pages: [] };

  const filteredResults = cachedData.pages
    .flatMap((page) => page.results)
    .filter((media) => {
      const title = media.original_title || media.original_name;
      return title.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for: {searchQuery}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredResults.length > 0 ? (
          filteredResults.map((media, i) => (
            <MovieCard
              key={`${media.id}-${i}`}
              id={media.id}
              posterPath={media.poster_path}
              title={media.title || media.name}
              type={media.media_type}
              score={media.vote_average}
              overview={media.overview}
            />
          ))
        ) : (
          <div className="col-span-full text-center">No results found</div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
