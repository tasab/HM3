import React, { useState, useEffect } from "react";
import { API_link } from "./APIlink";
import { getData } from "./fetchdata";

export const EposodeInfo = props => {
  let [episodeInfo, setEpisodeInfo] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let url = `${API_link.URL}/${props.match.params.showId}/season/${
    props.match.params.seasonNumber
  }/episode/${props.match.params.episodeNumber}?api_key=${
    API_link.KEY
  }&language=en-US`;

  const fetchDataByUrl = async url => {
    const data = await getData(url);
    setEpisodeInfo(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataByUrl(url);
  }, [url]);

  return isLoading ? (
    "lading"
  ) : (
    <>
      <h1>{episodeInfo.name}</h1>
      <p>{episodeInfo.overview}</p>
      <img
        alt={"img"}
        src={`https://image.tmdb.org/t/p/w300/${episodeInfo.still_path}`}
      />
      <h3>Season number {props.match.params.seasonNumber}</h3>
      <h3>Episode numbe {props.match.params.episodeNumber}</h3>
    </>
  );
};
