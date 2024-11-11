import React from "react";
import { Link, useLocation } from "react-router-dom";
import MovieIco from "../assets/icons/MovieIco";
import TvshowIco from "../assets/icons/TvshowIco";
import StarRating from "../assets/icons/StarRating";
import InformationIco from "../assets/icons/InformationIco";

const MovieCard = ({ id, posterPath, title, type, page, score }) => {
  const location = useLocation();
  const category = location.pathname.split("/").pop();

  return (
    <div className="rounded-sm bg-gray-400">
      <div className="flex flex-col justify-between items-center relative h-full">
        <button className="absolute font-bold top-0 left-0 p-3 bg-gray-600 opacity-70 flex justify-center items-center gap-2 text-sm rounded-tl-sm rounded-br-sm">
          <InformationIco />
          <p>More info</p>
        </button>
        <Link to={`/details/${category || "all"}/${id}?page=${page}`} key={id}>
          <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} height={220} width={300} alt={title} />
        </Link>
        <div className="p-1 bg-gray-500 opacity-85 text-sm w-full">
          <div className="flex gap-1 items-center">
            <h2 className="font-semibold ">Category:</h2>
            {type === "movie" ? (
              <>
                <span className="mr-1">Movie</span>
                <MovieIco height={14} width={14} />
              </>
            ) : (
              <>
                <span className="mr-1">TV</span>
                <TvshowIco height={14} width={14} />
              </>
            )}
          </div>
          <div className="font-bold flex items-center gap-1">
            Score: <span className="ml-2">{Number(score.toPrecision(2))} </span>
            <span className="mb-1 ml-2">
              <StarRating score={Number(score.toPrecision(2))} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
