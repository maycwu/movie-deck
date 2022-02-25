import React, { useState } from 'react';
import { ResultCard } from './ResultCard';
import axios from 'axios';

export function Add() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (event) => {
    event.preventDefault();

    setQuery(event.target.value);

    async function fetchData() {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${event.target.value}`
        );
        setResults(data.results);
        console.log(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  };

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search for a movie...'
              value={query}
              onChange={onChange}
            />
          </div>
          {results.length > 0 ? (
            <ul className='results'>
    
              {results.map((movie) => (
                <li key={movie.id}> <ResultCard movie={movie}/> </li>
              ))}
            </ul>
          ) : (
            <h1>Movie not found</h1>
          )}
        </div>
      </div>
    </div>
  );
}
