import React, { useState, useEffect } from "react";
import { API_link } from "./APIlink";
import { getData } from "./fetchdata";
import { Link } from "react-router-dom";

export const SeasonInfo = props => {
  let [seasonInfo, setSeasonInfo] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let url = `${API_link.URL}/${props.match.params.movieId}/season/${
    props.match.params.seasonNumber
  }?api_key=${API_link.KEY}&language=en-US`;

  const fetchDataByUrl = async url => {
    const data = await getData(url);
    setSeasonInfo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataByUrl(url);
  }, [url]);

  return isLoading ? (
    "lading"
  ) : (
    <>
      <h1>{seasonInfo.name}</h1>
      <p>{seasonInfo.overview}</p>
      <img
        alt={"img"}
        src={`https://image.tmdb.org/t/p/w300/${seasonInfo.poster_path}`}
      />
      <h3>Season number {props.match.params.seasonNumber}</h3>
      <h3>Number of episodes {seasonInfo.episodes.length}</h3>
      {seasonInfo.episodes.map(
        ({ name, show_id, season_number, episode_number }) => (
          <li key={show_id}>
            <Link
              to={`/info-of-episodes/${show_id}/${season_number}/${episode_number}`}
            >
              {name}
            </Link>
          </li>
        )
      )}
    </>
  );
};
