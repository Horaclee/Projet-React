import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import {Link} from "react-router-dom"
import "../App.css";



const Home = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeListFiltered, setPokeListFiltered] = useState([]);

  async function getData() {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d3994bb5c3f66e144147b5e2130fc60c");
    console.log("res", res.data);
    setPokeList(res.data.results);
    setPokeListFiltered(res.data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleChange(e) {
    if (!e.target.value) {
      setPokeListFiltered(pokeList);
      return;
    }

    setPokeListFiltered(
      pokeList.filter((film) => film.name.includes(e.target.value))
    );
  }
  return (
    <div>
      <a href="http://localhost:3000/filmpopulaire"><button>tendance</button></a>
      <input onChange={handleChange} type="text" />
      {pokeListFiltered.map((film, index) => {
        return (
          <div class="imagehome">
            {/* <p key={film.title}>
              <Link to={`/Film/${index}`}><img class="image" src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}></img></Link>
              <p class="titre">{film.title}</p>
            </p> */}
          </div>
        );
      })}

    </div>
  )
}

export default Home