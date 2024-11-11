import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTrendingData } from "../features/api/api";
import StarRating from "../assets/icons/StarRating";

const DetailsPage = () => {
  const { category, id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page") || 1;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [category, id, page],
    queryFn: async () => {
      const response = await fetchTrendingData(page, category);
      return response.results.find((item) => item.id === parseInt(id));
    },
    enabled: !!category && !!id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{category === "movie" ? data.title : data.name}</h1>
      <div className="flex gap-4">
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title || data.name} className="w-1/3" />
        <div>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p>{data.overview}</p>
          <p className="mt-2">
            <strong>Release Date:</strong> {data.release_date || data.first_air_date}
          </p>
          <p className="mt-2 flex gap-2 items-center">
            <strong>Rating:</strong> {Number(data.vote_average.toPrecision(2))}
            <span className="mb-2">
              <StarRating score={Number(data.vote_average.toPrecision(2))} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
