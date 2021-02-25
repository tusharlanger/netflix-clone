import React, { useState, useEffect } from 'react';
import axios from './axious';
import requests from './requests';
import '.Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url('https://image.tmbd/org/t/p/original${movie.backdrop_path}')`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="banner__contents">
          <h1>{movie.title || movie.name || movie.original_name}</h1>

          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>

          <h1 className="banner__description">{movie.overview}</h1>
        </div>
      </header>
    </div>
  );
}

export default Banner;
