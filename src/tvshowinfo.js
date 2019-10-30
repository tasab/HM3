import React, { useState, useEffect } from "react";
import { API_link } from "./APIlink";
import { getData } from "./fetchdata";
import { Link } from "react-router-dom";

export const TvShowInfo = props => {
  let [tvShowinformation, seTvShowinformation] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let url = `${API_link.URL}/${props.match.params.movieId}?api_key=${
    API_link.KEY
  }&language=en-US`;

  const fetchDataByUrl = async url => {
    const data = await getData(url);
    seTvShowinformation(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataByUrl(url);
  }, [url]);

  return isLoading ? (
    "lading"
  ) : (
    <>
      <h1>{tvShowinformation.original_name}</h1>
      <p>{tvShowinformation.overview}</p>
      <img
        alt={"img"}
        src={`https://image.tmdb.org/t/p/w300/${tvShowinformation.poster_path}`}
      />
      <h3>Number of seasons {tvShowinformation.number_of_seasons}</h3>
      <h3>Number of episodes {tvShowinformation.number_of_episodes}</h3>
      {tvShowinformation.seasons.map(({ name, id, season_number }) => (
        <li key={id}>
          <Link
            to={`/info-season/${id}/${
              props.match.params.movieId
            }/${season_number}`}
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  );
};
