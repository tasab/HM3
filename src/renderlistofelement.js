import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { API_link } from './APIlink'
import { getData } from "./fetchdata"
import { Link } from "react-router-dom"
import "./index.css"

export const RenderListOfElement = props => {
  
  let [tvShowList, setTvShowList] = useState([])
  let [isLoading, setIsLoading] = useState(true)
  let url = props.fetchUrl
  const fetchDataByUrl = async url => {
    const data = await getData(url)
    setTvShowList(data)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchDataByUrl(url)
  }, [url])


  return isLoading ? (
    "lading"
  ) : (
      <>
        <ul>
          {tvShowList.results.map(({ original_name, id }) => (
            <li key={id}>
              <Link to={`/info/${id}`}>{original_name}</Link>
            </li>
          ))}
        </ul>
      </>
    )
}

RenderListOfElement.propTypes = {
  fetchUrl: PropTypes.string.isRequired
};

RenderListOfElement.defaultProps = {
  fetchUrl: `${API_link.URL}/popular?api_key=${API_link.KEY}`
};
