import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import {Link} from "react-router-dom"
import "../App.css";

const TopRated = () => {
    const [filmList, setFilmList] = useState([]);
    const [filmListFiltered, setFilmListFiltered] = useState([]);
  
    async function getData() {
      const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=d3994bb5c3f66e144147b5e2130fc60c");
      console.log("res", res.data);
      setFilmList(res.data.results);
      setFilmListFiltered(res.data.results);
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    function handleChange(e) {
      if (!e.target.title) {
        setFilmListFiltered(filmList);
        return;
      }
  
      setFilmListFiltered(
        filmList.filter((film) => film.title.includes(e.target.title))
      );
    }
    return (
      <div>
          <Link to="/">Accueil</Link>
          <input onChange={handleChange} type="text" />
          {filmListFiltered.map((film, index) => {
              return (
              <div>
                  <p key={film.title}>
                  <Link to={`/toprateddesc/${index}`}><img class="image" src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}></img></Link>
                  <p class="titre">{film.title}</p>
                  </p>
              </div>
          );
        })}
  
      </div>
    )
  }
  
  export default TopRated;